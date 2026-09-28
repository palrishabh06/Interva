import { NextResponse } from "next/server";
import {
  generateInterviewReport,
  type InterviewReportInput,
} from "@/lib/ai/report";

export async function POST(request: Request) {
  try {
    const body =
      (await request.json()) as InterviewReportInput;

    if (
      !body.role ||
      !body.questions?.length ||
      !body.answers?.length ||
      !body.evaluations?.length
    ) {
      return NextResponse.json(
        {
          error:
            "role, questions, answers and evaluations are required",
        },
        { status: 400 }
      );
    }

    const report =
      await generateInterviewReport(body);

    return NextResponse.json(report);
  } catch (error: unknown) {
    console.error(
      "INTERVA REPORT ERROR:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Unknown error";

    return NextResponse.json(
      {
        error: "Failed to generate interview report",
        details: message,
      },
      { status: 500 }
    );
  }
}
