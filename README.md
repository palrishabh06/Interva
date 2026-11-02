# Interva — complete project scaffold

This archive is a self-contained Next.js starter project for a personalized, voice-led mock interview app.

## Features included
- Session setup: interview / practice / viva, role, company, difficulty, 10/20/30/45-minute target, job description, PDF/TXT resume, pasted resume text, practice topics and viva syllabus.
- Gemini-powered personalized questions, evaluation, and detailed report.
- Browser microphone audio capture via `getUserMedia` + `MediaRecorder`, silence-based turn detection, server-side Gemini audio transcription, automatic spoken questions, and automatic answer processing.
- Optional coaching assistance and a spoken closing summary.
- Resume PDF text extraction route.
- API errors shown in the interface.

## Setup
1. Install Node.js 20+.
2. Extract the ZIP and run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Put your Gemini API key in `.env.local`:
   `GEMINI_API_KEY=...`
5. Run `npm run dev` and open http://localhost:3000.

Never commit `.env.local`. Do not expose your API key in client-side code.

## Important engineering notes
- This uses Gemini audio transcription on completed answer clips, not a persistent real-time streaming audio model. Browser `MediaRecorder` support is better than browser speech recognition, but audio input and Gemini model support can vary by model and MIME type.
- Turn detection is based on local audio energy; test threshold/silence duration for different microphones and environments.
- The microphone is requested only after clicking Start session, as browsers require a user gesture for permission and autoplay.
- Speech synthesis is browser-native. The session automatically attempts playback after each generated question.
- This is a starter implementation, not a production-audited system. Test with your exact Node/browser versions before real use. Consider consent/privacy messaging, rate limiting, file upload limits, retention controls, auth, and usage cost monitoring before public deployment.
- The report speaks its closing message aloud; the detailed written report is displayed onscreen.
- The current flow asks one question at a time and evaluates each completed answer. True barge-in, live streaming transcription, interruption handling, and real-time conversational voice require a dedicated realtime audio model/service and are not fully implemented here.


## Voice interview resilience updates

- The first question is selected from the local question bank and starts without waiting for AI plan generation.
- Personalized plan generation runs in the background. A provider timeout does not block the candidate's first answer.
- If live question generation fails, the interview falls back to an unused local question-bank item.
- Candidate silence detection uses an approximately 4.6-second pause threshold after speech has been detected.
- The interview question/answer arrays are sent to question generation and report endpoints as transcript context.

AI services can still be unavailable. In that case, Interva continues with bank questions; personalized follow-ups and report quality depend on provider availability.


## Optional AI providers and low-latency interview behavior

The live interview advances from the prepared interview plan or local question bank and does not wait for a fresh remote question-generation request after each answer. Silence confirmation is set to 4 seconds. Per-answer coaching evaluation runs in the background so it cannot block the next question.

Configure any provider keys in `.env.local` (never commit this file):

```env
OPENROUTER_API_KEY=
OPENROUTER_MODEL=openrouter/free
GROQ_API_KEY=
GROQ_MODEL=llama-3.3-70b-versatile
CEREBRAS_API_KEY=
CEREBRAS_MODEL=llama-3.3-70b
GEMINI_API_KEY=
GEMINI_MODEL=gemini-3.8-flash
AI_ENABLE_GEMINI=true
```

Provider fallback is sequential and used for plan preparation, evaluation, and report generation. Provider calls have a 12-second timeout. Local bank questions keep the live interview moving even if all providers fail. Model names and free-tier availability may change; use model IDs enabled for your account.
