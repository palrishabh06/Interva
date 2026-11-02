
import { NextRequest, NextResponse } from "next/server";
import { generateJsonText, parseJson } from "@/lib/ai/client";
import { candidateContext } from "@/lib/ai/prompts";
import type { InterviewPlan, InterviewQuestion, SessionConfig } from "@/lib/ai/types";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { config?: SessionConfig };

    if (!body.config) {
      return NextResponse.json(
        { error: "Session configuration is required." },
        { status: 400 }
      );
    }

    const config = body.config;
    const questionCount = Math.min(
      14,
      Math.max(6, Math.ceil(config.durationMinutes / 3))
    );

    const prompt = `
You are preparing an interview plan for Interva.

CANDIDATE AND SESSION CONTEXT:
${candidateContext(config)}

TASK:
Prepare exactly ${questionCount} distinct interview questions in the correct order.
This plan will be used during a live voice interview, so questions must be ready before the session starts.

REQUIREMENTS:
- Tailor questions to the role, company, job description, resume, difficulty, and session mode.
- Never claim the candidate has experience that is not in their resume.
- Use the supplied job description as the primary source of role requirements.
- If the role is a data analyst role, consider SQL, data interpretation, statistics, metrics, projects, and business reasoning where relevant.
- For software roles, consider programming, problem solving, system concepts, and project discussion where relevant.
- For viva mode, focus on the supplied subject and syllabus.
- For practice mode, prioritize the supplied topics and learning goals.
- Start with a concise introductory question, then move through core skills, practical reasoning, and relevant projects.
- Progress from the selected difficulty level and avoid duplicate questions.
- Each question must ask one clear thing, not several unrelated questions.
- Do not invent company-specific interview questions or claim these questions are verified questions from a real interview.
- Include 3 to 5 evaluation criteria for every question.
- Include a short interviewerIntent and a suggestedFollowUpFocus for each question.
- Do not include answers, explanations, or coaching in the question bank.

Return valid JSON only in this exact structure:
{
  "questions": [
    {
      "question": "Question text",
      "category": "SQL",
      "difficulty": "Medium",
      "evaluationCriteria": ["Criterion one", "Criterion two", "Criterion three"],
      "interviewerIntent": "What this question assesses",
      "suggestedFollowUpFocus": "What to explore if needed"
    }
  ]
}
`;

    const text = await generateJsonText(prompt);
    const plan = parseJson<InterviewPlan>(text);

    if (
      !Array.isArray(plan.questions) ||
      plan.questions.length < 3 ||
      !plan.questions.every(
        (q: InterviewQuestion) =>
          typeof q.question === "string" &&
          q.question.trim().length > 0 &&
          Array.isArray(q.evaluationCriteria)
      )
    ) {
      throw new Error("The AI returned an invalid interview plan.");
    }

    return NextResponse.json({
      questions: plan.questions,
      preparedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error("Interview preparation failed:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not prepare the interview."
      },
      { status: 500 }
    );
  }
}

