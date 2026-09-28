import { NextResponse } from "next/server";
import {
  evaluateAnswer,
  type EvaluateAnswerInput,
} from "@/lib/ai/evaluate";

export async function POST(request: Request) {
  try {
    const body =
      (await request.json()) as EvaluateAnswerInput;

    if (
      !body.role ||
      !body.question ||
      !body.answer ||
      !body.evaluationCriteria
    ) {
      return NextResponse.json(
        {
          error:
            "role, question, answer and evaluationCriteria are required",
        },
        { status: 400 }
      );
    }

    const evaluation = await evaluateAnswer(body);

    return NextResponse.json(evaluation);
  } catch (error: unknown) {
    console.error("INTERVA EVALUATION ERROR:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unknown server error";

    return NextResponse.json(
      {
        error: "Failed to evaluate interview answer",
        details: message,
      },
      { status: 500 }
    );
  }
}
