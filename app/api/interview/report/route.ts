import { generateJsonText, parseJson } from "@/lib/ai/client";
import { candidateContext } from "@/lib/ai/prompts";
import type { Evaluation, SessionConfig } from "@/lib/ai/types";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const b = await req.json() as {
      config: SessionConfig;
      questions: string[];
      answers: string[];
      evaluations: Evaluation[];
    };

    if (!b.config) {
      return NextResponse.json({ error: "Session configuration is required." }, { status: 400 });
    }

    const transcript = (b.questions || []).map((q, i) =>
      `Q${i + 1}: ${q}\nA${i + 1}: ${(b.answers || [])[i] || "(no answer)"}`
    ).join("\n\n");

    const prompt = `Create a detailed, fair, encouraging interview report. Use evidence from the actual answers and tailor advice to the candidate's role and resume. Do not fabricate. Include overallScore, technicalScore, completenessScore, communicationScore (0-10), summary, strengths (3-6), improvements (3-6), questionAnalysis array of {question, answerSummary, score, feedback, betterAnswerApproach}, studyPlan (3-6 actionable items), nextSteps, and closingMessage spoken as an empathetic interviewer.\n\nContext:\n${candidateContext(b.config)}\n\nInterview transcript:\n${transcript}\n\nEvaluations: ${JSON.stringify(b.evaluations || [])}\n\nReturn valid JSON only.`;

    const text = await generateJsonText(prompt);
    const report = parseJson<Record<string, unknown>>(text);
    return NextResponse.json(report);
  } catch (e) {
    console.error("report route:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Report generation failed." },
      { status: 500 }
    );
  }
}
