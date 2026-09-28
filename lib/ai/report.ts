import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not configured");
}

const ai = new GoogleGenAI({
  apiKey,
});

const model =
  process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

export type InterviewReportInput = {
  role: string;
  difficulty: string;
  questions: string[];
  answers: string[];
  evaluations: {
    score: number;
    technicalAccuracy: number;
    completeness: number;
    communication: number;
    strengths: string[];
    weaknesses: string[];
    feedback: string;
    followUpFocus: string;
  }[];
};

export type InterviewReport = {
  overallScore: number;
  technicalScore: number;
  completenessScore: number;
  communicationScore: number;
  strengths: string[];
  areasToImprove: string[];
  recommendedPractice: string[];
  summary: string;
};

export async function generateInterviewReport(
  input: InterviewReportInput
): Promise<InterviewReport> {
  const interviewData = input.questions
    .map(
      (question, index) => `
Question ${index + 1}:
${question}

Candidate Answer:
${input.answers[index] || "No answer provided"}

Evaluation:
${JSON.stringify(input.evaluations[index] || {})}
`
    )
    .join("\n");

  const prompt = `
You are Interva, an AI technical interview evaluator.

Create a final interview report based ONLY on the interview data below.

Role:
${input.role}

Difficulty:
${input.difficulty}

Interview data:
${interviewData}

Requirements:

- Scores must be numbers from 0 to 10.
- overallScore must represent the candidate's overall interview performance.
- technicalScore must represent technical accuracy.
- completenessScore must represent how completely the candidate answered.
- communicationScore must represent clarity and communication.
- strengths must contain 3 to 5 strings.
- areasToImprove must contain 3 to 5 strings.
- recommendedPractice must contain 3 to 5 concrete practice topics.
- summary must be a concise string.
- Do not invent information.
- Return ONLY JSON.
- Do not use markdown.
- Do not wrap the JSON in code fences.

Your response MUST contain exactly these fields:

{
  "overallScore": 0,
  "technicalScore": 0,
  "completenessScore": 0,
  "communicationScore": 0,
  "strengths": [],
  "areasToImprove": [],
  "recommendedPractice": [],
  "summary": ""
}
`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text?.trim();

    if (!text) {
      throw new Error(
        "Gemini returned an empty interview report"
      );
    }

    console.log(
      "INTERVA RAW REPORT RESPONSE:",
      text
    );

    const parsed = JSON.parse(text);

    const report: InterviewReport = {
      overallScore: Number(parsed.overallScore),
      technicalScore: Number(parsed.technicalScore),
      completenessScore: Number(
        parsed.completenessScore
      ),
      communicationScore: Number(
        parsed.communicationScore
      ),
      strengths: Array.isArray(parsed.strengths)
        ? parsed.strengths.map(String)
        : [],
      areasToImprove: Array.isArray(
        parsed.areasToImprove
      )
        ? parsed.areasToImprove.map(String)
        : [],
      recommendedPractice: Array.isArray(
        parsed.recommendedPractice
      )
        ? parsed.recommendedPractice.map(String)
        : [],
      summary:
        typeof parsed.summary === "string"
          ? parsed.summary
          : "",
    };

    if (
      !Number.isFinite(report.overallScore) ||
      !Number.isFinite(report.technicalScore) ||
      !Number.isFinite(report.completenessScore) ||
      !Number.isFinite(report.communicationScore)
    ) {
      throw new Error(
        "Gemini report contains invalid score values"
      );
    }

    if (
      !report.strengths.length ||
      !report.areasToImprove.length ||
      !report.recommendedPractice.length ||
      !report.summary
    ) {
      throw new Error(
        "Gemini report is missing required content"
      );
    }

    return report;
  } catch (error) {
    console.error(
      "Interva report generation error:",
      error
    );

    throw error;
  }
}