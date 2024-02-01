import { atom } from "recoil";
import { Result } from "./types";

interface QuizState extends Result {
  isCorrect: boolean; // 정답 일치 여부
  hasTried: boolean; // 시도 여부
  reviewNote: string; // 오답 노트
}

export const themeAtom = atom<"first" | "second" | "third">({
  key: "theme",
  default: "first",
});

export const quizAtom = atom<QuizState[]>({
  key: "quiz",
  default: [],
});
