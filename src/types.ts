export type Subject = 'physics' | 'chemistry' | 'mathematics';

export type QuestionType = 'mcq' | 'numerical';

export type QuestionStatus = 
  | 'not_visited' 
  | 'not_answered' 
  | 'answered' 
  | 'marked_for_review' 
  | 'answered_marked_for_review';

export interface QuestionSolution {
  finalAnswer: string;
  stepByStep: string[];
  formulas: string[];
  keyConcept: string;
  shortcutTip?: string;
  commonPitfall?: string;
}

export interface Question {
  id: string;
  year: number; // 2020 to 2024
  shift: string; // e.g., "Jan Session Shift 1", "April Session Shift 2"
  subject: Subject;
  section: 'A' | 'B'; // Section A: MCQ (20 Qs), Section B: Numerical (10 Qs, attempt 5)
  topic: string;
  subtopic: string;
  type: QuestionType;
  questionText: string;
  options?: string[]; // for MCQ (4 options)
  correctAnswer: number | string; // index 0-3 for MCQ, or number string for numerical e.g. "25"
  benchmarkTimeSeconds: number; // typical recommended JEE time (e.g. 90s, 120s, 180s)
  solution: QuestionSolution;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface UserQuestionResponse {
  questionId: string;
  selectedOption?: number;
  numericalAnswer?: string;
  timeSpentSeconds: number;
  status: QuestionStatus;
  visitedCount: number;
}

export interface SubjectStats {
  score: number;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  accuracy: number;
  timeSpentSeconds: number;
  avgTimePerQuestion: number;
}

export interface TestResult {
  id: string;
  title: string;
  year: number | 'all';
  date: string;
  totalTimeSpentSeconds: number;
  allocatedTimeSeconds: number;
  totalScore: number;
  maxScore: number;
  estimatedPercentile: number;
  estimatedAIR: number;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  overallAccuracy: number;
  subjectStats: Record<Subject, SubjectStats>;
  responses: Record<string, UserQuestionResponse>;
  mode: 'exam' | 'practice';
}

export interface FilterOptions {
  subject: 'all' | Subject;
  status: 'all' | 'correct' | 'incorrect' | 'unattempted' | 'marked';
  difficulty?: 'all' | 'Easy' | 'Medium' | 'Hard';
}

export interface GoogleUser {
  id: string;
  name: string;
  email: string;
  picture?: string;
  givenName?: string;
  familyName?: string;
  candidateRollNumber?: string;
  provider: 'google';
  loginTimestamp: number;
}
