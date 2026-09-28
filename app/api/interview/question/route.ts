import { NextResponse } from "next/server";
import {
  generateInterviewQuestion,
  type GenerateQuestionInput,
} from "@/lib/ai/interview";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GenerateQuestionInput;

    if (!body.role || !body.difficulty || !body.category) {
      return NextResponse.json(
        {
          error: "role, difficulty and category are required",
        },
        { status: 400 }
      );
    }

    const question = await generateInterviewQuestion({
      role: body.role,
      difficulty: body.difficulty,
      category: body.category,
      previousQuestions: body.previousQuestions || [],
    });

    return NextResponse.json(question);
  } catch (error: unknown) {
    console.error("INTERVA AI ERROR:", error);

    const message =
      error instanceof Error ? error.message : "Unknown server error";

    return NextResponse.json(
      {
        error: "Failed to generate interview question",
        details: message,
      },
      { status: 500 }
    );
  }
}
