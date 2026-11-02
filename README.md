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
