export type InterviewQuestion = {
  id: number;
  question: string;
  category: "Introduction" | "Technical" | "Behavioral" | "Problem Solving";
  difficulty: "Easy" | "Medium" | "Hard";
};

export const starterQuestions: InterviewQuestion[] = [
  {
    id: 1,
    question:
      "Tell me about yourself and walk me through the experience most relevant to this role.",
    category: "Introduction",
    difficulty: "Easy",
  },
  {
    id: 2,
    question:
      "Describe a technical project you worked on recently. What problem were you solving, and what was your contribution?",
    category: "Technical",
    difficulty: "Medium",
  },
  {
    id: 3,
    question:
      "Tell me about a difficult technical problem you encountered. How did you approach debugging and solving it?",
    category: "Problem Solving",
    difficulty: "Medium",
  },
  {
    id: 4,
    question:
      "Tell me about a time you disagreed with a teammate about a technical decision. How did you handle it?",
    category: "Behavioral",
    difficulty: "Medium",
  },
  {
    id: 5,
    question:
      "Imagine your application suddenly starts receiving ten times its normal traffic. What would you investigate first, and how would you scale it?",
    category: "Technical",
    difficulty: "Hard",
  },
];
