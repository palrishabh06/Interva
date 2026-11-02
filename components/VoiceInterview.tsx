 "use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, Lightbulb, LoaderCircle, CheckCircle2, Square } from "lucide-react";
import type { Evaluation, InterviewPlan, InterviewQuestion, SessionConfig } from "@/lib/ai/types";

type Report = {overallScore:number;technicalScore:number;completenessScore:number;communicationScore:number;summary:string;strengths:string[];improvements:string[];questionAnalysis:{question:string;answerSummary:string;score:number;feedback:string;betterAnswerApproach:string}[];studyPlan:string[];nextSteps:string[];closingMessage:string};
type Props={config:SessionConfig; onExit:()=>void};
type Phase="initializing"|"speaking"|"listening"|"transcribing"|"thinking"|"report"|"error";
type SpeechRecognitionResultLike = { [index:number]:{transcript:string} };
type SpeechRecognitionLike = {continuous:boolean;interimResults:boolean;lang:string;onresult:((event:{results:ArrayLike<SpeechRecognitionResultLike>})=>void)|null;onerror:((event:unknown)=>void)|null;onend:(()=>void)|null;start:()=>void;stop:()=>void;abort:()=>void};
const SILENCE_MS=2400, MIN_ANSWER_MS=1800;
export default function VoiceInterview({config,onExit}:Props) {
 const [phase,setPhase]=useState<Phase>("initializing");
 const [question,setQuestion]=useState<InterviewQuestion|null>(null);
 const [plan,setPlan]=useState<InterviewQuestion[]>([]);
 const [transcript,setTranscript]=useState("");
 const [message,setMessage]=useState("Preparing your interview...");
 const [assist,setAssist]=useState(config.assistanceEnabled);
 const [report,setReport]=useState<Report|null>(null);
 const [elapsed,setElapsed]=useState(0);
 const [error,setError]=useState("");
 const [micReady,setMicReady]=useState(false);
 const [ended,setEnded]=useState(false);
 const streamRef=useRef<MediaStream|null>(null);
 const recorderRef=useRef<MediaRecorder|null>(null);
 const recognitionRef=useRef<SpeechRecognitionLike|null>(null);
 const liveTranscriptRef=useRef("");
 const endedRef=useRef(false);
 const chunksRef=useRef<Blob[]>([]);
 const audioContextRef=useRef<AudioContext|null>(null);
 const analyserRef=useRef<AnalyserNode|null>(null);
 const rafRef=useRef<number|null>(null);
 const silenceStartRef=useRef<number|null>(null);
 const speechStartRef=useRef<number|null>(null);
 const heardSpeechRef=useRef(false);
 const busyRef=useRef(false);
 const startedAtRef=useRef(0);
 const answersRef=useRef<string[]>([]);
 const questionsRef=useRef<string[]>([]);
 const planIndexRef=useRef(0);
 const evalsRef=useRef<Evaluation[]>([]);
 const configRef=useRef(config);
 const processAnswerRef=useRef<(answer:string)=>Promise<void>>(async()=>{});
 const phaseRef=useRef(phase);
 useEffect(()=>{phaseRef.current=phase},[phase]);

 const postJson=useCallback(async(url:string,body:unknown)=>{
  const r=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
  const d=await r.json(); if(!r.ok) throw new Error(d.error||"Request failed"); return d;
 },[]);
 const stopMeter=useCallback(()=>{if(rafRef.current!==null)cancelAnimationFrame(rafRef.current);rafRef.current=null;},[]);
 const stopRecorder=useCallback(()=>{stopMeter();const rec=recorderRef.current;if(rec&&rec.state!=="inactive"){try{rec.stop()}catch{}}},[stopMeter]);

 const speak=useCallback((text:string)=>new Promise<void>((resolve)=>{
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  const voices=window.speechSynthesis.getVoices();
  const v=voices.find(x=>/^en-IN/i.test(x.lang))||voices.find(x=>/^en-US/i.test(x.lang))||voices.find(x=>/^en-GB/i.test(x.lang))||voices.find(x=>/^en/i.test(x.lang));
  if(v){u.voice=v;u.lang=v.lang}else u.lang="en-US";
  u.rate=.94;u.pitch=1;u.volume=1;
  let done=false;const finish=()=>{if(done)return;done=true;resolve()};
  u.onend=finish;u.onerror=finish;
  window.speechSynthesis.speak(u);
  window.setTimeout(finish,Math.max(8000,text.length*95));
 }),[]);

 const beginRecording=useCallback(async()=>{
  if(endedRef.current)return;
  const stream=streamRef.current;
  if(!stream)throw new Error("Microphone stream is unavailable. Allow microphone access and restart the session.");
  if(!window.MediaRecorder)throw new Error("This browser does not support audio recording. Try current Chrome or Edge.");
  chunksRef.current=[];heardSpeechRef.current=false;silenceStartRef.current=null;speechStartRef.current=null;liveTranscriptRef.current="";
  setTranscript("");
  const speechWindow=window as Window & {SpeechRecognition?:new()=>SpeechRecognitionLike;webkitSpeechRecognition?:new()=>SpeechRecognitionLike};
  const Recognition=speechWindow.SpeechRecognition||speechWindow.webkitSpeechRecognition;
  recognitionRef.current=null;
  if(Recognition){try{
   const recognition=new Recognition();recognition.continuous=true;recognition.interimResults=true;recognition.lang="en-IN";
   recognition.onresult=(event)=>{let words="";for(let i=0;i<event.results.length;i++)words+=event.results[i][0].transcript+" ";liveTranscriptRef.current=words.trim();setTranscript(liveTranscriptRef.current);};
   recognition.onerror=()=>{};recognition.onend=()=>{};recognitionRef.current=recognition;recognition.start();
  }catch{recognitionRef.current=null;}}
  const mime=["audio/webm;codecs=opus","audio/webm","audio/mp4"].find(t=>MediaRecorder.isTypeSupported(t));
  const rec=mime?new MediaRecorder(stream,{mimeType:mime}):new MediaRecorder(stream);recorderRef.current=rec;
  rec.ondataavailable=e=>{if(e.data.size)chunksRef.current.push(e.data)};
  rec.onstop=async()=>{
   try{recognitionRef.current?.stop()}catch{}
   await new Promise(resolve=>window.setTimeout(resolve,500));
   if(endedRef.current||busyRef.current)return;
   const blob=new Blob(chunksRef.current,{type:rec.mimeType||"audio/webm"});
   if(blob.size<1500){setPhase("listening");setMessage("I’m listening. Take your time and speak naturally.");return;}
   busyRef.current=true;
   try{
    let words=liveTranscriptRef.current.trim();
    if(!words){setPhase("transcribing");setMessage("Transcribing your answer...");const form=new FormData();form.append("audio",blob,"answer.webm");const tr=await fetch("/api/interview/transcribe",{method:"POST",body:form});const td=await tr.json();if(!tr.ok)throw new Error(td.error||"Could not transcribe your answer.");words=String(td.transcript||"").trim();}
    if(endedRef.current){busyRef.current=false;return;}
    if(!words){setPhase("listening");setMessage("I didn’t catch that clearly. Please continue speaking.");busyRef.current=false;await beginRecording();return;}
    setTranscript(words);await processAnswerRef.current(words);
   }catch(e){if(!endedRef.current){setError(e instanceof Error?e.message:"Transcription failed.");setPhase("error");}busyRef.current=false;}
  };
  rec.start(250);setPhase("listening");setMessage(Recognition?"I’m listening. Your words will appear as you speak.":"I’m listening. Take your time; I won’t interrupt a short pause.");
  const ctx=audioContextRef.current||new AudioContext();audioContextRef.current=ctx;if(ctx.state==="suspended")await ctx.resume();
  const source=ctx.createMediaStreamSource(stream);const analyser=ctx.createAnalyser();analyser.fftSize=1024;source.connect(analyser);analyserRef.current=analyser;const data=new Uint8Array(analyser.fftSize);
  const tick=()=>{if(recorderRef.current!==rec||rec.state!=="recording"||endedRef.current)return;analyser.getByteTimeDomainData(data);let sum=0;for(let i=0;i<data.length;i++){const v=(data[i]-128)/128;sum+=v*v;}const rms=Math.sqrt(sum/data.length);const now=Date.now();if(rms>.025){heardSpeechRef.current=true;if(!speechStartRef.current)speechStartRef.current=now;silenceStartRef.current=null;}else if(heardSpeechRef.current){if(!silenceStartRef.current)silenceStartRef.current=now;if(now-silenceStartRef.current>SILENCE_MS&&speechStartRef.current&&now-speechStartRef.current>MIN_ANSWER_MS){stopRecorder();return;}}rafRef.current=requestAnimationFrame(tick);};
  rafRef.current=requestAnimationFrame(tick);
 },[stopRecorder]);

 const generateQuestion=useCallback(async(warmup=false,lastEvaluation?:Evaluation)=>{
  if(endedRef.current)return;
  setPhase("thinking");
  let q:InterviewQuestion;
  const nextIndex=planIndexRef.current;
  if(plan.length>0 && nextIndex<plan.length){
   q=plan[nextIndex];
   planIndexRef.current+=1;
   setMessage(warmup?"Your interview plan is ready. Let’s begin.":"Moving to the next prepared question...");
  } else if(plan.length>0){
   await makeReport();
   return;
  } else {
   setMessage("Preparing the next question...");
   q=await postJson("/api/interview/question",{config:configRef.current,previousQuestions:questionsRef.current,previousAnswers:answersRef.current,lastEvaluation,isWarmup:warmup}) as InterviewQuestion;
  }
  if(endedRef.current)return;
  setQuestion(q);questionsRef.current.push(q.question);setTranscript("");
  setPhase("speaking");setMessage("Interva is speaking...");
  await speak(q.question);
  if(endedRef.current||phaseRef.current==="report")return;
  await beginRecording();
 },[plan,postJson,speak,beginRecording]);

 const processAnswer=useCallback(async(answer:string)=>{
  try{
   if(endedRef.current){busyRef.current=false;return;}
   const q=question;
   if(!q){busyRef.current=false;return;}
   answersRef.current.push(answer);
   if(assist){
    const ev=await postJson("/api/interview/evaluate",{config:configRef.current,question:q.question,answer,evaluationCriteria:q.evaluationCriteria}) as Evaluation;
    evalsRef.current.push(ev);
    if(endedRef.current){busyRef.current=false;return;}
    const elapsedMin=(Date.now()-startedAtRef.current)/60000;
    if(elapsedMin>=configRef.current.durationMinutes || questionsRef.current.length>=plan.length || questionsRef.current.length>=18){
     await makeReport();
     return;
    }
    const assistText=`Thanks for explaining that. One thing to consider: ${ev.feedback}. ${ev.followUpFocus?`Could you expand on ${ev.followUpFocus}?`:"Let me ask a follow-up."}`;
    busyRef.current=false;
    setPhase("speaking");setMessage("Interva is responding...");
    await speak(assistText);
    await generateQuestion(false,ev);
    return;
   }
   const elapsedMin=(Date.now()-startedAtRef.current)/60000;
   if(elapsedMin>=configRef.current.durationMinutes || questionsRef.current.length>=plan.length || questionsRef.current.length>=18){
    await makeReport();
    return;
   }
   // Normal answers move through the prepared question bank without waiting for an LLM evaluation.
   // The final report evaluates the complete interview. Coaching mode above still evaluates each answer.
   busyRef.current=false;
   await generateQuestion(false);
  }catch(e){if(!endedRef.current){setError(e instanceof Error?e.message:"Could not process answer.");setPhase("error");}busyRef.current=false;}
 },[question,assist,postJson,speak,generateQuestion,plan.length]);
 useEffect(()=>{ processAnswerRef.current=processAnswer; },[processAnswer]);

 const makeReport=useCallback(async()=>{
  setPhase("thinking");setMessage("Preparing your personalized performance report...");
  const r=await postJson("/api/interview/report",{config:configRef.current,questions:questionsRef.current,answers:answersRef.current,evaluations:evalsRef.current}) as Report;
  setReport(r);setPhase("report");setMessage("Your interview is complete.");
  if(r.closingMessage)await speak(r.closingMessage);
 },[postJson,speak]);

 useEffect(()=>{
  let alive=true;
  const init=async()=>{
   try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}});
    if(!alive){stream.getTracks().forEach(t=>t.stop());return;}
    streamRef.current=stream;setMicReady(true);startedAtRef.current=Date.now();
    setPhase("initializing");setMessage("Preparing your personalized interview plan...");
    try {
     const prepared=await postJson("/api/interview/prepare",{config:configRef.current}) as InterviewPlan;
     if(!alive||endedRef.current)return;
     if(!Array.isArray(prepared.questions)||prepared.questions.length<3)throw new Error("The interview plan was incomplete.");
     setPlan(prepared.questions);
     planIndexRef.current=0;
     // The bank is ready; use its first question without another question-generation call.
     const first=prepared.questions[0];
     planIndexRef.current=1;
     setQuestion(first);questionsRef.current.push(first.question);
     setPhase("speaking");setMessage("Your interview is ready.");
     await speak(first.question);
     if(!endedRef.current)await beginRecording();
    } catch(prepError) {
     console.warn("Interview preparation failed; falling back to live question generation.",prepError);
     if(!alive||endedRef.current)return;
     setMessage("Using live question generation as a fallback...");
     await generateQuestion(true);
    }
   }catch(e){setError(e instanceof Error?e.message:"Could not initialize microphone.");setPhase("error");}
  };
  init();
  const timer=window.setInterval(()=>{if(startedAtRef.current)setElapsed(Math.floor((Date.now()-startedAtRef.current)/1000));},1000);
  return ()=>{alive=false;window.clearInterval(timer);try{recognitionRef.current?.abort()}catch{};stopRecorder();streamRef.current?.getTracks().forEach(t=>t.stop());audioContextRef.current?.close().catch(()=>{});window.speechSynthesis.cancel();};
 },[]); // Start is initiated by the session-start click that mounts this component.

 const toggleAssist=()=>{const next=!assist;setAssist(next);setMessage(next?"Assistance is enabled. I’ll offer supportive hints and feedback.":"Assistance is disabled. I’ll continue without coaching.");};
 const endInterview=()=>{
  if(endedRef.current||!window.confirm("End this interview and return to the main page? Your current unfinished answer will not be saved."))return;
  endedRef.current=true;setEnded(true);busyRef.current=true;
  try{recognitionRef.current?.abort()}catch{}
  const rec=recorderRef.current;
  if(rec&&rec.state!=="inactive"){rec.onstop=null;try{rec.stop()}catch{}}
  stopMeter();
  window.speechSynthesis.cancel();
  streamRef.current?.getTracks().forEach(t=>t.stop());
  audioContextRef.current?.close().catch(()=>{});
  onExit();
 };
 const fmt=(s:number)=>`${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`;
 return <main className="min-h-screen bg-[#08090b] text-white">
  <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12"><div className="text-xl font-semibold">interva<span className="text-zinc-500">.</span></div><div className="text-xs uppercase tracking-[.2em] text-zinc-400">{fmt(elapsed)} · {phase==="listening"?"Listening":phase==="speaking"?"Speaking":phase==="transcribing"?"Understanding your answer":phase==="report"?"Session complete":phase==="error"?"Needs attention":"Thinking"}</div></header>
  <section className="mx-auto max-w-4xl px-6 py-12">
   {phase==="report"&&report?<div className="space-y-7"><p className="text-xs uppercase tracking-[.25em] text-zinc-500">Your interview report</p><h1 className="text-4xl font-semibold">A thoughtful review of your performance</h1><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{[["Overall",report.overallScore],["Technical",report.technicalScore],["Completeness",report.completenessScore],["Communication",report.communicationScore]].map(([l,v])=><div key={String(l)} className="rounded-2xl border border-white/10 p-5"><div className="text-sm text-zinc-400">{l}</div><div className="mt-2 text-3xl font-semibold">{Number(v).toFixed(1)}<span className="text-sm text-zinc-500">/10</span></div></div>)}</div><p className="text-lg leading-8 text-zinc-300">{report.summary}</p><div className="grid gap-6 md:grid-cols-2"><div><h2 className="mb-3 font-semibold">Strengths</h2><ul className="list-disc space-y-2 pl-5 text-zinc-300">{report.strengths?.map(x=><li key={x}>{x}</li>)}</ul></div><div><h2 className="mb-3 font-semibold">Areas to improve</h2><ul className="list-disc space-y-2 pl-5 text-zinc-300">{report.improvements?.map(x=><li key={x}>{x}</li>)}</ul></div></div><h2 className="text-xl font-semibold">Your study plan</h2><ul className="list-disc space-y-2 pl-5 text-zinc-300">{report.studyPlan?.map(x=><li key={x}>{x}</li>)}</ul><h2 className="text-xl font-semibold">Question-by-question analysis</h2>{report.questionAnalysis?.map((x,i)=><article key={i} className="rounded-2xl border border-white/10 p-5"><div className="text-sm text-zinc-500">Question {i+1} · {x.score}/10</div><h3 className="my-2 font-medium">{x.question}</h3><p className="text-zinc-300">{x.feedback}</p><p className="mt-3 text-sm text-zinc-400">Better approach: {x.betterAnswerApproach}</p></article>)}<button onClick={onExit} className="rounded-full bg-white px-6 py-3 font-semibold text-black">Back to setup</button></div>
   :<><p className="mb-6 text-xs uppercase tracking-[.25em] text-zinc-500">{config.mode==="viva"?"Oral examination":config.mode==="practice"?"Practice session":"Interview in progress"}</p><h1 className="min-h-36 whitespace-pre-wrap text-3xl font-medium leading-relaxed md:text-4xl">{question?.question||"Preparing your first question..."}</h1><div className="mt-7 flex items-center gap-3 text-sm text-zinc-400"><span className={`h-2.5 w-2.5 rounded-full ${phase==="listening"?"animate-pulse bg-emerald-400":phase==="speaking"?"animate-pulse bg-sky-400":"bg-zinc-600"}`}/>{message}</div>
   <div className="mt-10 rounded-2xl border border-white/10 bg-white/[.03] p-5"><div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[.2em] text-zinc-500"><Mic size={14}/>{phase==="listening"?"Listening to your answer":"Your answer"}</div><p className="min-h-16 whitespace-pre-wrap leading-7 text-zinc-200">{transcript||"Your answer will appear here as you speak when live recognition is supported."}</p>{phase==="transcribing"&&<p className="mt-3 flex items-center gap-2 text-sm text-zinc-400"><LoaderCircle className="animate-spin" size={16}/>Transcribing your audio...</p>}</div>
   <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-500"><span className="flex items-center gap-2"><CheckCircle2 size={15} className={micReady?"text-emerald-400":"text-zinc-500"}/>{micReady?"Microphone connected":"Connecting microphone"}</span><span>·</span><span>Hands-free conversation</span><button onClick={toggleAssist} disabled={ended} aria-pressed={assist} className={`ml-auto flex items-center gap-2 rounded-full border px-4 py-2 ${assist?"border-emerald-400/40 text-emerald-300":"border-white/15 text-zinc-300"}`}><Lightbulb size={15}/> Assistance {assist?"ON":"OFF"}</button><button onClick={endInterview} disabled={ended||phase==="report"} className="flex items-center gap-2 rounded-full border border-red-400/40 px-4 py-2 text-red-200 disabled:opacity-50"><Square size={14}/> End interview</button></div>
   {phase==="error"&&<div role="alert" className="mt-6 rounded-xl border border-red-400/30 bg-red-400/5 p-4 text-red-200"><p>{error}</p><button onClick={()=>{setError("");setPhase("listening");beginRecording().catch(e=>{setError(String(e));setPhase("error")})}} className="mt-3 rounded-full border border-red-200/30 px-4 py-2">Retry listening</button></div>}
   </>}
  </section>
 </main>;
}
