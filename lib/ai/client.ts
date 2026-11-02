
import { GoogleGenAI } from "@google/genai";

export function getAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }
  return new GoogleGenAI({ apiKey });
}

export function getModel() {
  return process.env.GEMINI_MODEL || "gemini-3.8-flash";
}

export function parseJson<T>(text: string): T {
  const cleaned = text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "");
  return JSON.parse(cleaned) as T;
}

async function tryGemini(prompt: string): Promise<string> {
  if (process.env.AI_ENABLE_GEMINI !== "true") {
    throw new Error("Gemini is disabled in provider settings.");
  }

  const response = await getAI().models.generateContent({
    model: getModel(),
    contents: prompt,
    config: { responseMimeType: "application/json" },
  });

  if (!response.text) throw new Error("Gemini returned an empty response.");
  return response.text;
}

async function tryOpenRouterFree(prompt: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OpenRouter is not configured.");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openrouter/free",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    }),
    signal: AbortSignal.timeout(30000),
  });

  if (!response.ok) {
    throw new Error(`OpenRouter returned HTTP ${response.status}.`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (typeof content !== "string" || !content.trim()) {
    throw new Error("OpenRouter returned an empty response.");
  }
  return content;
}

export async function generateJsonText(prompt: string): Promise<string> {
  const providers = [
    { name: "OpenRouter free", run: () => tryOpenRouterFree(prompt) },
    { name: "Gemini", run: () => tryGemini(prompt) },
  ];

  const errors: string[] = [];

  for (const provider of providers) {
    try {
      const result = await provider.run();
      console.info(`AI provider succeeded: ${provider.name}`);
      return result;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`AI provider failed: ${provider.name}: ${message}`);
      errors.push(`${provider.name}: ${message}`);
    }
  }

  throw new Error(
    `All configured free AI providers failed. ${errors.join(" | ")}`
  );
}
