import { Response } from "./types";

const BASE_URL = `https://opentdb.com/api.php`;

export const fetchQuiz = (): Promise<Response> => {
  return fetch(`${BASE_URL}?amount=10&type=multiple`).then((response) =>
    response.json()
  );
};
