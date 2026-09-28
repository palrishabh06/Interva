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

export type EvaluateAnswerInput = {
  role: string;
  question: string;
  answer: string;
  evaluationCriteria: string[];
};

export type AnswerEvaluation = {
  score: number;
  technicalAccuracy: number;
  completeness: number;
  communication: number;
  strengths: string[];
  weaknesses: string[];
  feedback: string;
  followUpFocus: string;
};

export async function evaluateAnswer(
  input: EvaluateAnswerInput
): Promise<AnswerEvaluation> {
  const prompt = `
You are Interva, an AI technical interviewer.

Evaluate the candidate's answer objectively.

Role:
${input.role}

Interview question:
${input.question}

Candidate answer:
${input.answer}

Evaluation criteria:
${input.evaluationCriteria
  .map((criterion) => `- ${criterion}`)
  .join("\n")}

Evaluate the answer on:

1. Technical accuracy
2. Completeness
3. Communication and clarity

Use scores from 0 to 10.

Also identify:
- 2 to 3 strengths
- 2 to 3 weaknesses or missing areas
- concise actionable feedback
- what topic should be explored in a follow-up question

Return ONLY valid JSON.

Return exactly:

{
  "score": 0,
  "technicalAccuracy": 0,
  "completeness": 0,
  "communication": 0,
  "strengths": [
    "string"
  ],
  "weaknesses": [
    "string"
  ],
  "feedback": "string",
  "followUpFocus": "string"
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

    const text = response.text;

    if (!text) {
      throw new Error("Gemini returned an empty evaluation");
    }

    const parsed = JSON.parse(text) as AnswerEvaluation;

    if (
      typeof parsed.score !== "number" ||
      typeof parsed.technicalAccuracy !== "number" ||
      typeof parsed.completeness !== "number" ||
      typeof parsed.communication !== "number" ||
      !Array.isArray(parsed.strengths) ||
      !Array.isArray(parsed.weaknesses) ||
      !parsed.feedback ||
      !parsed.followUpFocus
    ) {
      throw new Error(
        "Gemini returned an invalid evaluation format"
      );
    }

    return parsed;
  } catch (error) {
    console.error("Interva evaluation error:", error);
    throw error;
  }
}
