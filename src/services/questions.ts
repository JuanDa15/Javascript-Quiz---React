import { Question } from "../types"

export async function getAllQuestions(limit: number) {
  const response = await fetch('http://localhost:5173/data.json')
  const json: Question[] = await response.json()
  return json.sort(() => Math.random() - 0.5).slice(0, limit)
}