export enum QuestionType {
  MCQ = 'MCQ',
  FILL_BLANK = 'FILL_BLANK',
  SENTENCE_BUILDER = 'SENTENCE_BUILDER',
  DROPDOWN = 'DROPDOWN',
  WRITING = 'WRITING',
}

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  options?: string[]; // For MCQ or Dropdown
  parts?: string[]; // For split sentence inputs e.g. "While I [input]..."
  subPrompt?: string; // Example text or sub-instruction
}

export interface TaskSection {
  id: string;
  title: string;
  instruction: string;
  questions: Question[];
}

export interface ExamPageData {
  id: string;
  title: string;
  tasks: TaskSection[];
}

export interface AnswersState {
  [key: string]: string;
}
