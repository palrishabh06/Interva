/**
 * Interva starter question bank (200 entries).
 * Company tags indicate broad practice relevance, NOT verified or guaranteed interview questions.
 * Extend role/company/skill metadata as you curate the bank for your product.
 */
export type InterviewSection =
  | "introduction"
  | "projects"
  | "behavioral"
  | "technical"
  | "problem-solving"
  | "system-design"
  | "closing";

export type Difficulty = "easy" | "medium" | "hard";

export interface InterviewQuestion {
  id: string;
  question: string;
  section: InterviewSection;
  roles: string[];
  companies: string[];
  skills: string[];
  difficulty: Difficulty;
  tags: string[];
}

export const QUESTION_BANK: InterviewQuestion[] = [
  {
    "id": "introduction_001",
    "question": "Tell me about yourself.",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_002",
    "question": "Walk me through your resume.",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_003",
    "question": "What interests you about this role?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_004",
    "question": "Why are you looking for this opportunity?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_005",
    "question": "What are your short-term career goals?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_006",
    "question": "What are your long-term career goals?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_007",
    "question": "What are your strongest technical skills?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_008",
    "question": "What is one skill you are currently improving?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_009",
    "question": "What makes you a good fit for this position?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_010",
    "question": "What do you know about our company?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_011",
    "question": "Why do you want to work here?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_012",
    "question": "How does this role align with your background?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_013",
    "question": "What kind of work motivates you?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_014",
    "question": "How would your teammates describe you?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_015",
    "question": "What is an achievement you are proud of?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_016",
    "question": "What do you hope to learn in this role?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_017",
    "question": "What differentiates you from other candidates?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_018",
    "question": "What are you looking for in your next team?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_019",
    "question": "How do you define professional success?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "introduction_020",
    "question": "Is there anything important about your background we have not discussed?",
    "section": "introduction",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "introduction"
    ]
  },
  {
    "id": "projects_001",
    "question": "Tell me about a project you are particularly proud of.",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_002",
    "question": "What problem did this project solve?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_003",
    "question": "Who were the intended users of the project?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_004",
    "question": "What was your individual contribution?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_005",
    "question": "How did you divide the work across the team?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_006",
    "question": "Why did you choose this technology stack?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_007",
    "question": "Walk me through the architecture of the project.",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_008",
    "question": "What was the most difficult technical challenge?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_009",
    "question": "How did you resolve that challenge?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_010",
    "question": "What alternatives did you consider?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_011",
    "question": "How did you validate the solution?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_012",
    "question": "What metrics did you use to measure success?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_013",
    "question": "What trade-offs did you make?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_014",
    "question": "How did you handle errors and edge cases?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_015",
    "question": "How did you test the project?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_016",
    "question": "What would you improve if you rebuilt it?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_017",
    "question": "How would the system behave at ten times the scale?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_018",
    "question": "What did you learn from this project?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_019",
    "question": "How did you manage project deadlines?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_020",
    "question": "Which part of the project would you redesign today?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_021",
    "question": "How did you ensure data quality?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_022",
    "question": "How did you protect sensitive information?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_023",
    "question": "How did you deploy the project?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_024",
    "question": "What feedback did you receive from users or reviewers?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_025",
    "question": "What was the biggest lesson from a failure in this project?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_026",
    "question": "How did you monitor the project after deployment?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_027",
    "question": "How did you document the project?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_028",
    "question": "What was the most important design decision?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_029",
    "question": "How did you collaborate with others?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "projects_030",
    "question": "Can you explain one component in greater technical depth?",
    "section": "projects",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "projects",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_001",
    "question": "Tell me about a time you solved a difficult problem.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_002",
    "question": "Describe a time you disagreed with a teammate.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_003",
    "question": "Tell me about a mistake you made and what you learned.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_004",
    "question": "How do you handle competing deadlines?",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_005",
    "question": "Tell me about a time you learned something quickly.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_006",
    "question": "Describe a time you received difficult feedback.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_007",
    "question": "Tell me about a time you took initiative.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_008",
    "question": "Describe a time you had to adapt to change.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_009",
    "question": "Tell me about a time you helped a teammate.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_010",
    "question": "Describe a conflict you resolved.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_011",
    "question": "Tell me about a time you failed to meet a goal.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_012",
    "question": "How do you prioritize your work?",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_013",
    "question": "Describe a time you worked with ambiguity.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_014",
    "question": "Tell me about a time you persuaded someone using evidence.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_015",
    "question": "How do you respond when requirements change?",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_016",
    "question": "Describe a time you improved a process.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_017",
    "question": "Tell me about a time you made a decision with incomplete information.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_018",
    "question": "How do you ensure clear communication in a team?",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_019",
    "question": "Describe a time you took ownership of an issue.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_020",
    "question": "Tell me about a time you had to explain a complex idea simply.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_021",
    "question": "How do you handle pressure?",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_022",
    "question": "Describe a time you balanced quality and speed.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_023",
    "question": "Tell me about a time you went beyond your assigned work.",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_024",
    "question": "How do you approach a task you do not know how to complete?",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "behavioral_025",
    "question": "What would you do if you disagreed with your manager?",
    "section": "behavioral",
    "roles": [
      "All"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "behavioral",
      "follow-up-capable"
    ]
  },
  {
    "id": "dsa_001",
    "question": "Explain the difference between an array and a linked list.",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_002",
    "question": "How would you detect a cycle in a linked list?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_003",
    "question": "How would you reverse a linked list?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_004",
    "question": "How would you find the middle of a linked list?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_005",
    "question": "How would you find two numbers that sum to a target?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_006",
    "question": "How would you solve the 3Sum problem?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_007",
    "question": "How would you determine whether a string is a palindrome?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_008",
    "question": "How would you find the longest substring without repeating characters?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_009",
    "question": "How would you implement a stack using queues?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_010",
    "question": "How would you implement a queue using stacks?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_011",
    "question": "How would you find the first non-repeating character?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_012",
    "question": "How would you group anagrams?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_013",
    "question": "How would you merge overlapping intervals?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_014",
    "question": "How would you search in a rotated sorted array?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_015",
    "question": "How would you find the kth largest element?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_016",
    "question": "How would you traverse a binary tree level by level?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_017",
    "question": "How would you validate a binary search tree?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_018",
    "question": "How would you find the lowest common ancestor?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_019",
    "question": "How would you detect a cycle in a graph?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_020",
    "question": "When would you use BFS instead of DFS?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_021",
    "question": "How would you find the shortest path in an unweighted graph?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_022",
    "question": "Explain dynamic programming with an example.",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_023",
    "question": "How would you solve the coin change problem?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_024",
    "question": "How would you find the longest increasing subsequence?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_025",
    "question": "How would you implement a trie?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_026",
    "question": "What is the time complexity of binary search?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_027",
    "question": "How do you analyze time and space complexity?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_028",
    "question": "How would you design an LRU cache?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_029",
    "question": "How would you find duplicate values efficiently?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_030",
    "question": "How would you sort a large dataset that does not fit in memory?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_031",
    "question": "How would you find the top k frequent elements?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_032",
    "question": "How would you solve a matrix traversal problem?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_033",
    "question": "How would you identify a deadlock in a concurrent program?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_034",
    "question": "What is the difference between a heap and a BST?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "dsa_035",
    "question": "How would you optimize a solution that is too slow?",
    "section": "problem-solving",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "dsa",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_001",
    "question": "Explain the four pillars of object-oriented programming.",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_002",
    "question": "What is the difference between an interface and an abstract class?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_003",
    "question": "Explain composition versus inheritance.",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_004",
    "question": "What is a process versus a thread?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_005",
    "question": "What is a race condition?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_006",
    "question": "Explain deadlock and its four necessary conditions.",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_007",
    "question": "What is the difference between TCP and UDP?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_008",
    "question": "Explain HTTP methods and status codes.",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_009",
    "question": "What happens when you enter a URL in a browser?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_010",
    "question": "What is the difference between SQL and NoSQL databases?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_011",
    "question": "Explain primary keys and foreign keys.",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_012",
    "question": "What is database normalization?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_013",
    "question": "When would you denormalize a database?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_014",
    "question": "What is an index and what are its trade-offs?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_015",
    "question": "Explain ACID properties.",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_016",
    "question": "What is a database transaction?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_017",
    "question": "What is the difference between authentication and authorization?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_018",
    "question": "Explain REST API design principles.",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_019",
    "question": "What is caching and when can it be harmful?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_020",
    "question": "What is Git branching and how do you resolve a merge conflict?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_021",
    "question": "What is CI/CD?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_022",
    "question": "How do unit tests differ from integration tests?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_023",
    "question": "What is dependency injection?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_024",
    "question": "Explain memory management and garbage collection.",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "fundamentals_025",
    "question": "What is the difference between synchronous and asynchronous execution?",
    "section": "technical",
    "roles": [
      "SDE",
      "Software Engineer",
      "Software Development Engineer",
      "Backend Engineer",
      "Full Stack Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "fundamentals",
      "role-specific"
    ]
  },
  {
    "id": "system_design_001",
    "question": "Design a URL shortening service.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_002",
    "question": "Design a rate limiter.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_003",
    "question": "Design a notification delivery system.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_004",
    "question": "Design a chat application.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_005",
    "question": "Design a file storage service.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_006",
    "question": "Design a video streaming platform.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_007",
    "question": "Design a news feed.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_008",
    "question": "Design a ride-sharing backend.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_009",
    "question": "Design an online code execution platform.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_010",
    "question": "Design a search autocomplete service.",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_011",
    "question": "How would you scale an API to millions of requests?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_012",
    "question": "How would you design a distributed cache?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_013",
    "question": "How would you handle database sharding?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_014",
    "question": "How would you ensure high availability?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_015",
    "question": "How would you design idempotent APIs?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_016",
    "question": "How would you handle retries without duplicate processing?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_017",
    "question": "How would you monitor a production service?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_018",
    "question": "How would you design an event-driven architecture?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_019",
    "question": "How would you choose between a monolith and microservices?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "system_design_020",
    "question": "How would you manage consistency in a distributed system?",
    "section": "system-design",
    "roles": [
      "SDE",
      "Software Engineer",
      "Backend Engineer",
      "Senior Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "hard",
    "tags": [
      "system_design",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_001",
    "question": "Explain the bias-variance trade-off.",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_002",
    "question": "What is overfitting and how can you reduce it?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_003",
    "question": "How do you handle missing values?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_004",
    "question": "How do you detect and treat outliers?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_005",
    "question": "When should you use precision versus recall?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_006",
    "question": "Explain the ROC-AUC metric.",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_007",
    "question": "How do you handle class imbalance?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_008",
    "question": "What is cross-validation and why is it useful?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_009",
    "question": "How do you prevent data leakage?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_010",
    "question": "How do you select relevant features?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_011",
    "question": "Explain regularization in machine learning.",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_012",
    "question": "Compare decision trees and random forests.",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_013",
    "question": "When would you use gradient boosting?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_014",
    "question": "How does k-means clustering work?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_015",
    "question": "How do you evaluate a regression model?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_016",
    "question": "What is the difference between bagging and boosting?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_017",
    "question": "How would you explain a model to a nontechnical stakeholder?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_018",
    "question": "How would you monitor model drift?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_019",
    "question": "How would you deploy a model reliably?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "ml_data_020",
    "question": "How do you design an experiment or A/B test?",
    "section": "technical",
    "roles": [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
      "Machine Learning Engineer"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "ml_data",
      "role-specific"
    ]
  },
  {
    "id": "llm_001",
    "question": "Explain how a large language model generates text.",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_002",
    "question": "What is retrieval-augmented generation (RAG)?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_003",
    "question": "Why use RAG instead of fine-tuning?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_004",
    "question": "How do embeddings represent text?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_005",
    "question": "How would you choose a chunking strategy?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_006",
    "question": "What is a vector database?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_007",
    "question": "How do you evaluate retrieval quality?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_008",
    "question": "What is reranking and when is it useful?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_009",
    "question": "How would you reduce hallucinations in a RAG system?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_010",
    "question": "How do you handle citations and source grounding?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_011",
    "question": "What is prompt injection and how would you mitigate it?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_012",
    "question": "What is the difference between an agent and a workflow?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_013",
    "question": "How do tools work in an agentic system?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_014",
    "question": "How would you design memory for an AI agent?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_015",
    "question": "How do you evaluate an LLM application?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_016",
    "question": "How would you reduce latency in an LLM pipeline?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_017",
    "question": "How would you manage token and inference costs?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_018",
    "question": "When would you use structured output?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_019",
    "question": "What is fine-tuning and when is it appropriate?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "llm_020",
    "question": "How would you build a production RAG pipeline?",
    "section": "technical",
    "roles": [
      "LLM Engineer",
      "AI Engineer",
      "ML Engineer",
      "Machine Learning Engineer",
      "Data Scientist"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Atlassian",
      "Meta",
      "Adobe",
      "Uber",
      "Flipkart",
      "Infosys",
      "TCS",
      "Wipro",
      "Accenture",
      "NVIDIA",
      "OpenAI"
    ],
    "skills": [],
    "difficulty": "medium",
    "tags": [
      "llm",
      "role-specific"
    ]
  },
  {
    "id": "closing_001",
    "question": "Why should we hire you?",
    "section": "closing",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "closing"
    ]
  },
  {
    "id": "closing_002",
    "question": "What are your strengths and development areas?",
    "section": "closing",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "closing"
    ]
  },
  {
    "id": "closing_003",
    "question": "What would you like to accomplish in your first 90 days?",
    "section": "closing",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "closing"
    ]
  },
  {
    "id": "closing_004",
    "question": "What questions do you have for the interviewer?",
    "section": "closing",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "closing"
    ]
  },
  {
    "id": "closing_005",
    "question": "Is there anything else you would like us to know?",
    "section": "closing",
    "roles": [
      "All"
    ],
    "companies": [],
    "skills": [],
    "difficulty": "easy",
    "tags": [
      "closing"
    ]
  }];

export interface QuestionFilters {
  role?: string;
  company?: string;
  section?: InterviewSection;
  difficulty?: Difficulty;
  excludeIds?: string[];
}

/** Returns relevant bank questions. Generic questions tagged "All" remain eligible for every role. */
export function selectBankQuestions(filters: QuestionFilters = {}): InterviewQuestion[] {
  const role = filters.role?.trim().toLowerCase();
  const company = filters.company?.trim().toLowerCase();
  const excluded = new Set(filters.excludeIds ?? []);

  return QUESTION_BANK.filter((item) => {
    if (excluded.has(item.id)) return false;
    if (filters.section && item.section !== filters.section) return false;
    if (filters.difficulty && item.difficulty !== filters.difficulty) return false;

    const roleMatches =
      !role ||
      item.roles.some((tag) => tag.toLowerCase() === "all" || tag.toLowerCase() === role) ||
      item.roles.some((tag) => role.includes(tag.toLowerCase()) || tag.toLowerCase().includes(role));
    const companyMatches =
      !company ||
      item.companies.length === 0 ||
      item.companies.some((tag) => tag.toLowerCase() === company);

    return roleMatches && companyMatches;
  });
}

/** A deterministic fallback opening question; no AI call is required. */
export function getOpeningQuestion(): InterviewQuestion {
  return QUESTION_BANK.find((item) => item.id === "introduction_001")!;
}
