import {NextRequest,NextResponse} from "next/server";
import pdf from "pdf-parse";
export const runtime="nodejs";
export async function POST(req:NextRequest){
 try{
  const f=(await req.formData()).get("file");
  if(!(f instanceof File)||f.size>10*1024*1024)return NextResponse.json({error:"Please upload a PDF smaller than 10 MB."},{status:400});
  if(f.type!=="application/pdf")return NextResponse.json({error:"Only PDF files are supported by this parser."},{status:400});
  const parsed=await pdf(Buffer.from(await f.arrayBuffer()));
  if(!parsed.text.trim())return NextResponse.json({error:"No selectable text found. Paste the resume text manually."},{status:422});
  return NextResponse.json({text:parsed.text.slice(0,30000)});
 }catch(e){console.error("resume parse:",e);return NextResponse.json({error:"Could not parse this PDF. Paste the resume text manually."},{status:500});}
}