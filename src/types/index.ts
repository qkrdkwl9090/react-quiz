export interface Response {
  response_code: number;
  results: Result[];
}

export interface Result {
  type: "multiple";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
