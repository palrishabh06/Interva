import { NextRequest, NextResponse } from "next/server";
import { generateJsonText, parseJson } from "@/lib/ai/client";
import { candidateContext, INTERVIEWER_STYLE } from "@/lib/ai/prompts";
import type { InterviewQuestion, SessionConfig } from "@/lib/ai/types";
export const runtime = "nodejs";
export async function POST(req: NextRequest) {
 try {
  const body = await req.json() as {config:SessionConfig; previousQuestions?:string[]; previousAnswers?:string[]; lastEvaluation?:unknown; isWarmup?:boolean};
  if (!body.config) return NextResponse.json({error:"Session configuration is required."},{status:400});
  const prompt = `${INTERVIEWER_STYLE}
Candidate/session context:
${candidateContext(body.config)}
Previous questions: ${JSON.stringify(body.previousQuestions || [])}
Previous answers: ${JSON.stringify(body.previousAnswers || [])}
Last evaluation/context: ${JSON.stringify(body.lastEvaluation || null)}
Warm-up requested: ${Boolean(body.isWarmup)}
Create exactly one next question. Use a friendly short warm-up only if warm-up requested. Otherwise personalize the question to resume/job description/topics and avoid duplicates. For formal interview mode, focus on realistic interviewing. For practice mode, focus on learning and allow supportive hints if assistance is enabled. For viva mode, ask oral-exam questions from the supplied subject/syllabus. Return JSON only with question, category, difficulty, evaluationCriteria (3-5 strings), interviewerIntent, suggestedFollowUpFocus.`;
  const responseText = await generateJsonText(prompt);
  const result = parseJson<InterviewQuestion>(responseText);
  if (!result.question || !Array.isArray(result.evaluationCriteria)) throw new Error("The model returned an incomplete question.");
  return NextResponse.json(result);
 } catch(e) {
  console.error("question route:",e);
  return NextResponse.json({error:e instanceof Error?e.message:"Question generation failed."},{status:500});
 }
}