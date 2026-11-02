import { NextRequest, NextResponse } from "next/server";
import { getAI, getModel } from "@/lib/ai/client";
export const runtime = "nodejs";
export async function POST(req: NextRequest) {
 try {
  const form = await req.formData();
  const audio = form.get("audio");
  if (!(audio instanceof File)) return NextResponse.json({error:"Audio file is required."},{status:400});
  if (audio.size < 500) return NextResponse.json({error:"Audio was too short or empty. Please answer again."},{status:400});
  if (audio.size > 20 * 1024 * 1024) return NextResponse.json({error:"Audio is too large. Please keep each answer shorter."},{status:413});
  const bytes = Buffer.from(await audio.arrayBuffer());
  const mimeType = audio.type || "audio/webm";
  const response = await getAI().models.generateContent({
   model:getModel(),
   contents:[{inlineData:{mimeType,data:bytes.toString("base64")}},{text:"Transcribe the candidate's speech verbatim. Return only the words spoken. Do not summarize, answer, or add labels. If speech is unintelligible, return an empty string."}],
  });
  return NextResponse.json({transcript:(response.text || "").trim()});
 } catch(e) {
  console.error("transcription route:",e);
  return NextResponse.json({error:e instanceof Error?e.message:"Audio transcription failed."},{status:500});
 }
}