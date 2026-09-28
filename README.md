# Interva

**Interva** is an AI-powered interview practice platform designed to simulate realistic technical and behavioral interviews.

> Practice smarter. Interview better.

## Vision

Interva combines an LLM, deterministic interview orchestration, and eventually RAG to create interviews that adapt to a candidate rather than asking a fixed list of questions.

## Current version

v0.1 — product shell + interview state + starter question engine.

### Planned architecture

- **Next.js + TypeScript** — application and UI
- **LLM** — question generation, follow-ups, answer evaluation, feedback
- **PostgreSQL + pgvector** — persistent data and future vector search
- **RAG** — ground questions in a candidate's resume and job description
- **Deterministic interview engine** — controls state, progression, limits and scoring constraints
- **Speech layer** — planned for a later voice-interview version

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

Copy `.env.example` to `.env.local` and add the required server-side API keys when the AI layer is enabled.

## Roadmap

- [x] Landing page
- [x] Interview setup
- [x] Interview session UI
- [x] Question progression
- [ ] LLM question generation
- [ ] Structured answer evaluation
- [ ] Resume parsing
- [ ] Embeddings + pgvector
- [ ] RAG-based resume/JD grounding
- [ ] Adaptive difficulty
- [ ] Interview report
- [ ] Authentication and history
- [ ] Voice interviews

## Project structure

```text
interva/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
│   └── questions.ts
├── .env.example
├── package.json
└── README.md
```

## License

MIT
