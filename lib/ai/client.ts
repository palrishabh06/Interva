
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

async function requestOpenAICompatible(
  provider: string,
  apiKey: string,
  endpoint: string,
  model: string,
  prompt: string,
): Promise<string> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      temperature: 0.2,
    }),
    // Keep provider attempts bounded so a broken provider doesn't hang prep.
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error(`${provider} returned HTTP ${response.status}.`);
  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (typeof content !== "string" || !content.trim()) {
    throw new Error(`${provider} returned an empty response.`);
  }
  return content;
}

async function tryOpenRouter(prompt: string): Promise<string> {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) throw new Error("OpenRouter is not configured.");
  const model = process.env.OPENROUTER_MODEL || "openrouter/free";
  return requestOpenAICompatible("OpenRouter", key, "https://openrouter.ai/api/v1/chat/completions", model, prompt);
}

async function tryGroq(prompt: string): Promise<string> {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("Groq is not configured.");
  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
  return requestOpenAICompatible("Groq", key, "https://api.groq.com/openai/v1/chat/completions", model, prompt);
}

export async function generateJsonText(prompt: string): Promise<string> {
  const providers = [
    { name: "OpenRouter", run: () => tryOpenRouter(prompt) },
    { name: "Groq", run: () => tryGroq(prompt) },
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
