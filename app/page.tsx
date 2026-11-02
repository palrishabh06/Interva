 "use client";
import { useState } from "react";
import { FileText, Mic, Sparkles } from "lucide-react";
import VoiceInterview from "@/components/VoiceInterview";
import type { SessionConfig } from "@/lib/ai/types";
const defaults:SessionConfig={mode:"interview",role:"Software Engineer",company:"",difficulty:"Medium",durationMinutes:20,jobDescription:"",resumeText:"",topics:"",subject:"",syllabus:"",assistanceEnabled:false};
export default function Home(){
 const [config,setConfig]=useState<SessionConfig>(defaults);
 const [started,setStarted]=useState(false);
 const [fileName,setFileName]=useState("");
 const [uploadError,setUploadError]=useState("");
 const set=(key:keyof SessionConfig,value:SessionConfig[keyof SessionConfig])=>setConfig(c=>({...c,[key]:value}));
 async function readResume(file:File){
  setUploadError("");setFileName(file.name);
  if(file.type==="text/plain"){set("resumeText",await file.text());return;}
  if(file.type==="application/pdf"){
   try{
    const form=new FormData();form.append("file",file);
    const r=await fetch("/api/resume/parse",{method:"POST",body:form});const d=await r.json();
    if(!r.ok)throw new Error(d.error||"PDF parsing failed");
    set("resumeText",d.text);
   }catch(e){setUploadError(e instanceof Error?e.message:"Could not read resume. Paste its text below.");}
  } else setUploadError("Upload a PDF or TXT resume, or paste the resume text below.");
 }
 if(started)return <VoiceInterview config={config} onExit={()=>setStarted(false)}/>;
 return <main className="min-h-screen bg-[#08090b] text-white"><header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6"><div className="text-xl font-semibold">interva<span className="text-zinc-500">.</span></div><div className="text-sm text-zinc-500">AI interview practice</div></header><section className="mx-auto max-w-4xl px-6 pb-20 pt-10"><div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400"><Sparkles size={14}/> Practice smarter. Interview better.</div><h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Welcome to Interva<span className="text-zinc-500">.</span></h1><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">A personalized mock interviewer that listens to your answers, asks relevant follow-ups, and helps you improve.</p>
 <div className="mt-10 grid gap-5 rounded-3xl border border-white/10 bg-white/[.025] p-6 md:grid-cols-2">
 <label className="block text-sm text-zinc-400">Session mode<select value={config.mode} onChange={e=>set("mode",e.target.value as SessionConfig["mode"])} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white"><option value="interview">Real interview simulation</option><option value="practice">Practice & learning</option><option value="viva">Viva / oral exam</option></select></label>
 <label className="block text-sm text-zinc-400">Role / target position<input value={config.role} onChange={e=>set("role",e.target.value)} placeholder="Software Engineer" className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white"/></label>
 <label className="block text-sm text-zinc-400">Company (optional)<input value={config.company} onChange={e=>set("company",e.target.value)} placeholder="Company name" className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white"/></label>
 <label className="block text-sm text-zinc-400">Difficulty<select value={config.difficulty} onChange={e=>set("difficulty",e.target.value as SessionConfig["difficulty"])} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white"><option>Easy</option><option>Medium</option><option>Hard</option></select></label>
 <label className="block text-sm text-zinc-400">Session duration<select value={config.durationMinutes} onChange={e=>set("durationMinutes",Number(e.target.value))} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white">{[10,20,30,45].map(n=><option key={n} value={n}>{n} minutes</option>)}</select></label>
 <label className="block text-sm text-zinc-400">Resume (PDF or TXT)<span className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-950 p-3"><FileText size={18}/><input type="file" accept=".pdf,.txt,text/plain,application/pdf" onChange={e=>{const f=e.target.files?.[0];if(f)void readResume(f)}} className="min-w-0 text-xs text-zinc-300"/></span>{fileName&&<span className="mt-1 block text-xs text-emerald-400">{fileName}</span>}</label>
 <label className="block text-sm text-zinc-400 md:col-span-2">Job description<textarea value={config.jobDescription} onChange={e=>set("jobDescription",e.target.value)} rows={3} placeholder="Paste the job description to personalize interview questions..." className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white"/></label>
 <label className="block text-sm text-zinc-400 md:col-span-2">Resume text / candidate background<textarea value={config.resumeText} onChange={e=>set("resumeText",e.target.value)} rows={3} placeholder="Paste resume text here if you don't have a PDF..." className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white"/></label>
 {config.mode==="practice"&&<label className="block text-sm text-zinc-400 md:col-span-2">Topics to practice<textarea value={config.topics} onChange={e=>set("topics",e.target.value)} rows={2} placeholder="e.g. SQL, DSA, machine learning, project explanation" className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white"/></label>}
 {config.mode==="viva"&&<><label className="block text-sm text-zinc-400">Subject<input value={config.subject} onChange={e=>set("subject",e.target.value)} placeholder="e.g. Data Mining" className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white"/></label><label className="block text-sm text-zinc-400">Syllabus<textarea value={config.syllabus} onChange={e=>set("syllabus",e.target.value)} rows={2} placeholder="Paste units or syllabus topics" className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-white"/></label></>}
 <label className="flex items-start gap-3 text-sm text-zinc-300 md:col-span-2"><input type="checkbox" checked={config.assistanceEnabled} onChange={e=>set("assistanceEnabled",e.target.checked)} className="mt-1"/> Enable coaching assistance for hints and help thinking through difficult questions. In formal interview mode, assistance can affect simulation realism.</label>
 {uploadError&&<p className="text-sm text-amber-300 md:col-span-2">{uploadError}</p>}
 <button onClick={()=>setStarted(true)} className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 font-semibold text-black md:col-span-2"><Mic size={18}/> Start session <span aria-hidden>→</span></button>
 <p className="text-center text-xs leading-5 text-zinc-500 md:col-span-2">Starting the session requests microphone access. Use headphones to prevent interviewer audio from leaking into the microphone.</p>
 </div></section></main>
}