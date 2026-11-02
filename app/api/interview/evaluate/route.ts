import { NextRequest, NextResponse } from "next/server";
import { getAI, getModel, parseJson } from "@/lib/ai/client";
import { candidateContext, INTERVIEWER_STYLE } from "@/lib/ai/prompts";
import type { Evaluation, SessionConfig } from "@/lib/ai/types";
export const runtime = "nodejs";
export async function POST(req:NextRequest) {
 try {
  const b=await req.json() as {config:SessionConfig; question:string; answer:string; evaluationCriteria:string[]; assistanceEnabled?:boolean};
  if (!b.question || !b.answer?.trim()) return NextResponse.json({error:"Question and answer are required."},{status:400});
  const prompt=`You are an expert interview assessor. ${INTERVIEWER_STYLE}
Context:\n${candidateContext(b.config)}
Question: ${b.question}
Candidate answer: ${b.answer}
Criteria: ${(b.evaluationCriteria||[]).join("; ")}
Score 0-10 for technical accuracy, completeness, communication and overall. Give specific strengths and gaps. Be fair, empathetic, actionable, and grounded in what was said. Provide followUpFocus. JSON only: {"score":0,"technicalAccuracy":0,"completeness":0,"communication":0,"strengths":[""],"weaknesses":[""],"feedback":"","followUpFocus":""}`;
  const r=await getAI().models.generateContent({model:getModel(),contents:prompt,config:{responseMimeType:"application/json"}});
  const e=parseJson<Evaluation>(r.text||"");
  return NextResponse.json(e);
 } catch(e) { console.error("evaluation route:",e); return NextResponse.json({error:e instanceof Error?e.message:"Evaluation failed."},{status:500}); }
}