"use client";

import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  Loader2,
  Mic,
  ShieldCheck,
  Sparkles,
  Target,
  XCircle,
} from "lucide-react";

const features = [
  [
    BrainCircuit,
    "Adaptive questioning",
    "Questions evolve based on your answers instead of following a fixed script.",
  ],
  [
    FileText,
    "Resume-aware",
    "Bring your resume into the interview context as the RAG layer is added.",
  ],
  [
    ShieldCheck,
    "Structured evaluation",
    "Get consistent feedback across technical depth, clarity and problem solving.",
  ],
];

const categories = [
  "Introduction",
  "Technical",
  "Problem Solving",
  "Behavioral",
  "Technical",
];

type InterviewQuestion = {
  question: string;
  category: string;
  difficulty: string;
  evaluationCriteria: string[];
};

type AnswerEvaluation = {
  score: number;
  technicalAccuracy: number;
  completeness: number;
  communication: number;
  strengths: string[];
  weaknesses: string[];
  feedback: string;
  followUpFocus: string;
};

type InterviewReport = {
  overallScore: number;
  technicalScore: number;
  completenessScore: number;
  communicationScore: number;
  strengths: string[];
  areasToImprove: string[];
  recommendedPractice: string[];
  summary: string;
};

export default function Home() {
  const [started, setStarted] = useState(false);

  const [role, setRole] = useState("Software Engineer");
  const [difficulty, setDifficulty] = useState("Medium");

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const [question, setQuestion] =
    useState<InterviewQuestion | null>(null);

  const [evaluation, setEvaluation] =
    useState<AnswerEvaluation | null>(null);
  
  const [finalEvaluation, setFinalEvaluation] =
  useState<AnswerEvaluation | null>(null);

  const [report, setReport] =
  useState<InterviewReport | null>(null);

const [generatingReport, setGeneratingReport] =
  useState(false);

  const [previousQuestions, setPreviousQuestions] =
    useState<string[]>([]);

  const [previousAnswers, setPreviousAnswers] =
    useState<string[]>([]);

  const [evaluations, setEvaluations] =
    useState<AnswerEvaluation[]>([]);

  const [loadingQuestion, setLoadingQuestion] =
    useState(false);

  const [evaluating, setEvaluating] =
    useState(false);

  const [error, setError] = useState("");

  async function generateQuestion(
    questionIndex: number,
    evaluationContext?: AnswerEvaluation
  ) {
    setLoadingQuestion(true);
    setError("");

    try {
      const category =
        categories[questionIndex % categories.length];

      const response = await fetch(
        "/api/interview/question",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role,
            difficulty,
            category,
            previousQuestions,
            previousAnswers,
            evaluations: evaluationContext
              ? [...evaluations, evaluationContext]
              : evaluations,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.details ||
            data.error ||
            "Failed to generate interview question"
        );
      }

      setQuestion(data);

      setPreviousQuestions((previous) => [
        ...previous,
        data.question,
      ]);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to generate the next question."
      );
    } finally {
      setLoadingQuestion(false);
    }
  }

  async function startInterview() {
    setStarted(true);
    setIndex(0);
    setAnswer("");
    setQuestion(null);
    setEvaluation(null);
    setPreviousQuestions([]);
    setPreviousAnswers([]);
    setEvaluations([]);
    setError("");

    setLoadingQuestion(true);

    try {
      const response = await fetch(
        "/api/interview/question",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role,
            difficulty,
            category: categories[0],
            previousQuestions: [],
            previousAnswers: [],
            evaluations: [],
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.details ||
            data.error ||
            "Failed to start interview"
        );
      }

      setQuestion(data);
      setPreviousQuestions([data.question]);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to start the interview."
      );
    } finally {
      setLoadingQuestion(false);
    }
  }

  async function submitAnswer() {
    if (!answer.trim() || !question || evaluating) {
      return;
    }

    setEvaluating(true);
    setError("");

    const currentAnswer = answer.trim();

    try {
      const response = await fetch(
        "/api/interview/evaluate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role,
            question: question.question,
            answer: currentAnswer,
            evaluationCriteria:
              question.evaluationCriteria,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.details ||
            data.error ||
            "Failed to evaluate answer"
        );
      }

      const result =
        data as AnswerEvaluation;

      setEvaluation(result);

      setPreviousAnswers((previous) => [
        ...previous,
        currentAnswer,
      ]);

      setEvaluations((previous) => [
        ...previous,
        result,
      ]);
      if (index === categories.length - 1) {
  setFinalEvaluation(result);
}
      
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to evaluate your answer."
      );
    } finally {
      setEvaluating(false);
    }
  }

async function generateReport(
  finalEvaluation?: AnswerEvaluation
) {
  setGeneratingReport(true);
  setError("");

  try {
    const finalEvaluations = finalEvaluation
      ? [...evaluations, finalEvaluation]
      : evaluations;

    const response = await fetch(
      "/api/interview/report",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role,
          difficulty,
          questions: previousQuestions,
          answers: previousAnswers,
          evaluations: finalEvaluations,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.details ||
          data.error ||
          "Failed to generate interview report"
      );
    }

    setReport(data);
  } catch (err) {
    console.error(err);

    setError(
      err instanceof Error
        ? err.message
        : "Unable to generate your final report."
    );
  } finally {
    setGeneratingReport(false);
  }
}

  async function continueInterview() {
  const nextIndex = index + 1;

  if (nextIndex >= categories.length) {
    await generateReport();
    return;
  }

  setAnswer("");
  setEvaluation(null);
  setIndex(nextIndex);

  await generateQuestion(
    nextIndex,
    evaluation
  );
}

  const interviewComplete =
    index >= categories.length - 1 &&
    evaluation !== null;

  if (started) {
    return (
      <main className="min-h-screen bg-[#08090b] px-5 py-8 md:px-10">
        <div className="mx-auto max-w-5xl">
          <header className="mb-8 flex items-center justify-between">
            <div className="text-xl font-semibold tracking-tight">
              interva<span className="text-zinc-500">.</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">
              <Clock3 size={15} />
              AI Interview
            </div>
          </header>

          <div className="mb-5 flex items-center justify-between text-sm text-zinc-500">
            <span>
              Question {Math.min(index + 1, categories.length)} of{" "}
              {categories.length}
            </span>

            {question && (
              <span>
                {question.category} · {question.difficulty}
              </span>
            )}
          </div>

          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{
                width: `${
                  ((index + 1) /
                    categories.length) *
                  100
                }%`,
              }}
            />
          </div>

          {error && (
            <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.035] p-7 md:p-10">
            {loadingQuestion && !question ? (
              <div className="py-16 text-center">
                <Loader2
                  size={28}
                  className="mx-auto animate-spin text-zinc-400"
                />

                <p className="mt-5 text-sm text-zinc-500">
                  Interva is preparing your next question...
                </p>
              </div>
            ) : question ? (
              <>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <Code2 size={22} />
                </div>

                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {role} · {difficulty}
                </p>

                <h1 className="max-w-3xl text-2xl font-medium leading-relaxed md:text-4xl">
                  {question.question}
                </h1>

                {!evaluation && (
                  <>
                    <textarea
                      value={answer}
                      onChange={(e) =>
                        setAnswer(e.target.value)
                      }
                      placeholder="Type your answer here..."
                      className="mt-10 min-h-52 w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-5 text-base leading-7 outline-none placeholder:text-zinc-600 focus:border-white/25"
                    />

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">
                      <button
                        disabled
                        className="flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-500"
                      >
                        <Mic size={17} />
                        Voice coming soon
                      </button>

                      <button
                        onClick={submitAnswer}
                        disabled={
                          !answer.trim() ||
                          evaluating
                        }
                        className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {evaluating ? (
                          <>
                            <Loader2
                              size={17}
                              className="animate-spin"
                            />
                            Evaluating...
                          </>
                        ) : (
                          <>
                            Submit answer
                            <ArrowRight size={17} />
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}

                {evaluation && (
                  <div className="mt-10">
                    <div className="grid gap-4 sm:grid-cols-4">
                      <ScoreCard
                        label="Overall"
                        value={evaluation.score}
                      />
                      <ScoreCard
                        label="Technical"
                        value={
                          evaluation.technicalAccuracy
                        }
                      />
                      <ScoreCard
                        label="Completeness"
                        value={
                          evaluation.completeness
                        }
                      />
                      <ScoreCard
                        label="Communication"
                        value={
                          evaluation.communication
                        }
                      />
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            size={18}
                          />
                          <h2 className="font-medium">
                            Strengths
                          </h2>
                        </div>

                        <ul className="mt-4 space-y-3">
                          {evaluation.strengths.map(
                            (item, i) => (
                              <li
                                key={i}
                                className="text-sm leading-6 text-zinc-400"
                              >
                                • {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                        <div className="flex items-center gap-2">
                          <XCircle size={18} />
                          <h2 className="font-medium">
                            Areas to improve
                          </h2>
                        </div>

                        <ul className="mt-4 space-y-3">
                          {evaluation.weaknesses.map(
                            (item, i) => (
                              <li
                                key={i}
                                className="text-sm leading-6 text-zinc-400"
                              >
                                • {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                      <div className="flex items-center gap-2">
                        <Target size={18} />
                        <h2 className="font-medium">
                          AI Feedback
                        </h2>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-zinc-400">
                        {evaluation.feedback}
                      </p>
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                        Follow-up focus
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {evaluation.followUpFocus}
                      </p>
                    </div>

                    {!interviewComplete ? (
                      <button
                        onClick={
                          continueInterview
                        }
                        disabled={
                          loadingQuestion
                        }
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-black disabled:opacity-50"
                      >
                        {loadingQuestion ? (
                          <>
                            <Loader2
                              size={17}
                              className="animate-spin"
                            />
                            Preparing follow-up...
                          </>
                        ) : (
                          <>
                            Continue interview
                            <ArrowRight
                              size={17}
                            />
                          </>
                        )}
                      </button>
                    ) : (
                      <div className="mt-6 space-y-6">
  {/* Overall score */}
  <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-center md:p-10">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
      <Sparkles size={24} />
    </div>

    <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
      Final interview report
    </p>

    <div className="mt-3 text-6xl font-semibold tracking-tight">
      {report.overallScore.toFixed(1)}
      <span className="text-2xl text-zinc-600">
        /10
      </span>
    </div>

    <p className="mt-3 text-sm text-zinc-500">
      Overall performance
    </p>
  </div>

  {/* Score breakdown */}
  <div className="grid gap-4 sm:grid-cols-3">
    <ScoreCard
      label="Technical"
      value={report.technicalScore}
    />

    <ScoreCard
      label="Completeness"
      value={report.completenessScore}
    />

    <ScoreCard
      label="Communication"
      value={report.communicationScore}
    />
  </div>

  {/* Strengths + improvements */}
  <div className="grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <div className="flex items-center gap-2">
        <CheckCircle2 size={18} />

        <h2 className="font-medium">
          Strengths
        </h2>
      </div>

      <ul className="mt-5 space-y-4">
        {report.strengths.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-6 text-zinc-400"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <div className="flex items-center gap-2">
        <XCircle size={18} />

        <h2 className="font-medium">
          Areas to improve
        </h2>
      </div>

      <ul className="mt-5 space-y-4">
        {report.areasToImprove.map(
          (item, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-6 text-zinc-400"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
              <span>{item}</span>
            </li>
          )
        )}
      </ul>
    </div>
  </div>

  {/* Recommended practice */}
  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
    <div className="flex items-center gap-2">
      <Target size={18} />

      <h2 className="font-medium">
        Recommended practice
      </h2>
    </div>

    <div className="mt-5 grid gap-3 md:grid-cols-2">
      {report.recommendedPractice.map(
        (item, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex gap-3">
              <span className="text-sm text-zinc-600">
                0{i + 1}
              </span>

              <span className="text-sm leading-6 text-zinc-400">
                {item}
              </span>
            </div>
          </div>
        )
      )}
    </div>
  </div>

  {/* AI summary */}
  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
    <div className="flex items-center gap-2">
      <BrainCircuit size={18} />

      <h2 className="font-medium">
        AI summary
      </h2>
    </div>

    <p className="mt-4 text-sm leading-7 text-zinc-400">
      {report.summary}
    </p>
  </div>

  {/* Finish */}
  <div className="pt-2 text-center">
    <button
      onClick={() => window.location.reload()}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.05]"
    >
      Start another interview
      <ArrowRight size={16} />
    </button>
  </div>
</div>
                    )}
                  </div>
                )}
              </>
            ) : null}
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b]">
      <div className="mx-auto max-w-6xl px-5 py-7 md:px-10">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            interva<span className="text-zinc-500">.</span>
          </div>

          <span className="text-sm text-zinc-500">
            AI interview practice
          </span>
        </nav>

        <section className="relative py-24 md:py-32">
          <div className="absolute left-1/2 top-12 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-400">
              <Sparkles size={14} />
              Practice smarter. Interview better.
            </div>

            <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Your next interview
              <br />
              <span className="text-zinc-500">
                starts here.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Interva simulates realistic technical and
              behavioral interviews, adapts to your answers,
              and turns every session into actionable
              feedback.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-zinc-400">
                Role

                <select
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
                >
                  <option>
                    Software Engineer
                  </option>
                  <option>
                    Backend Engineer
                  </option>
                  <option>
                    Data Analyst
                  </option>
                  <option>
                    Data Scientist
                  </option>
                </select>
              </label>

              <label className="text-sm text-zinc-400">
                Difficulty

                <select
                  value={difficulty}
                  onChange={(e) =>
                    setDifficulty(e.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </label>
            </div>

            <button
              onClick={startInterview}
              disabled={loadingQuestion}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingQuestion ? (
                <>
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                  Preparing interview...
                </>
              ) : (
                <>
                  Start interview
                  <ArrowRight size={17} />
                </>
              )}
            </button>
          </div>
        </section>

        <section className="grid gap-4 border-t border-white/10 py-12 md:grid-cols-3">
          {features.map(
            ([Icon, title, desc]) => {
              const I =
                Icon as typeof BrainCircuit;

              return (
                <div
                  key={title as string}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <I size={20} />

                  <h2 className="mt-5 font-medium">
                    {title as string}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {desc as string}
                  </p>
                </div>
              );
            }
          )}
        </section>
      </div>
    </main>
  );
}

function ScoreCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
        {label}
      </p>

      <div className="mt-2 text-3xl font-semibold">
        {value}
        <span className="text-sm text-zinc-600">
          /10
        </span>
      </div>
    </div>
  );
}