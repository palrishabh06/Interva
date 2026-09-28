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

export type GenerateQuestionInput = {
  role: string;
  difficulty: string;
  category: string;
  previousQuestions?: string[];
  previousAnswers?: string[];
  evaluations?: AnswerEvaluationContext[];
};

export type AnswerEvaluationContext = {
  score: number;
  technicalAccuracy: number;
  completeness: number;
  communication: number;
  strengths: string[];
  weaknesses: string[];
  feedback: string;
  followUpFocus: string;
};

export type GeneratedQuestion = {
  question: string;
  category: string;
  difficulty: string;
  evaluationCriteria: string[];
};

export async function generateInterviewQuestion(
  input: GenerateQuestionInput
): Promise<GeneratedQuestion> {
  const previousQuestions =
    input.previousQuestions?.length
      ? input.previousQuestions
          .map((q, i) => `${i + 1}. ${q}`)
          .join("\n")
      : "None";

  const previousAnswers =
    input.previousAnswers?.length
      ? input.previousAnswers
          .map((a, i) => `${i + 1}. ${a}`)
          .join("\n")
      : "None";

  const evaluations =
    input.evaluations?.length
      ? input.evaluations
          .map(
            (evaluation, i) => `
Evaluation ${i + 1}:
- Score: ${evaluation.score}/10
- Technical accuracy: ${evaluation.technicalAccuracy}/10
- Completeness: ${evaluation.completeness}/10
- Communication: ${evaluation.communication}/10
- Strengths: ${evaluation.strengths.join("; ")}
- Weaknesses: ${evaluation.weaknesses.join("; ")}
- Feedback: ${evaluation.feedback}
- Follow-up focus: ${evaluation.followUpFocus}
`
          )
          .join("\n")
      : "None";

  const prompt = `
You are Interva, an AI technical interviewer.

Your job is to conduct a realistic adaptive interview.

Interview configuration:
- Role: ${input.role}
- Difficulty: ${input.difficulty}
- Category: ${input.category}

Previous questions:
${previousQuestions}

Previous candidate answers:
${previousAnswers}

Previous evaluations:
${evaluations}

Generate exactly ONE new interview question.

Adaptive interviewing rules:

1. The question must be appropriate for the candidate's role.
2. Match the requested difficulty and category.
3. Never repeat a previous question.
4. Use the candidate's previous answers and evaluations when they are available.
5. If the previous evaluation identifies a weakness or missing concept, explore that area naturally.
6. If the candidate performed strongly, increase depth or complexity appropriately.
7. If the candidate struggled, ask a focused question that tests the missing concept without being unnecessarily difficult.
8. The question should feel like a realistic human interviewer follow-up.
9. Do not mention the evaluation, score, or internal reasoning to the candidate.
10. Provide exactly 3 evaluation criteria.
11. Return ONLY valid JSON.
12. Do not use markdown fences.

Return exactly this structure:

{
  "question": "string",
  "category": "string",
  "difficulty": "string",
  "evaluationCriteria": [
    "string",
    "string",
    "string"
  ]
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
      throw new Error("Gemini returned an empty response");
    }

    const parsed = JSON.parse(text) as GeneratedQuestion;

    if (
      !parsed.question ||
      !parsed.category ||
      !parsed.difficulty ||
      !Array.isArray(parsed.evaluationCriteria) ||
      parsed.evaluationCriteria.length !== 3
    ) {
      throw new Error(
        "Gemini returned an invalid question format"
      );
    }

    return parsed;
  } catch (error) {
    console.error("Interva Gemini error:", error);
    throw error;
  }
}