export type SessionConfig = {
  mode: "interview" | "practice" | "viva";
  role: string;
  company: string;
  difficulty: "Easy" | "Medium" | "Hard";
  durationMinutes: number;
  jobDescription: string;
  resumeText: string;
  topics: string;
  subject: string;
  syllabus: string;
  assistanceEnabled: boolean;
};
export type InterviewQuestion = {
  question: string;
  category: string;
  difficulty: string;
  evaluationCriteria: string[];
  interviewerIntent?: string;
  suggestedFollowUpFocus?: string;
};
export type Evaluation = {
  score: number; technicalAccuracy: number; completeness: number; communication: number;
  strengths: string[]; weaknesses: string[]; feedback: string; followUpFocus: string;
  transcript?: string;
};
export type InterviewPlan = {
  questions: InterviewQuestion[];
};