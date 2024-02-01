const BASE_URL = `https://opentdb.com/api.php`;

export function fetchQuiz() {
  return fetch(`${BASE_URL}?amount=10&type=multiple`).then((response) =>
    response.json()
  );
}
