import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodosForAI(board);

  console.log('FORMATTED TODOS to send >>', todos);

  const response = await fetch('/api/generateSummary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ todos }),
  });

  const GPTData = await response.json();

  const { content } = GPTData;
  return content;
}

export default fetchSuggestion;