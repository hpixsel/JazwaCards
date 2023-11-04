import { OpenAI } from "openai";

export default async function handler(req, res) {
  const data = req.body
  const openai = new OpenAI({apiKey: data.key})

  const fullPrompt = `CSV:
${data.prompt}

Wykorzystaj wszystkie słowa podane w formacie CSV i stwórz z nich zestaw krótkich zdań na poziome B1, które mają sens w języku pierwszego słówka i w języku drugiego słówka, upewnij się, że w wygenerowanych zdaniach zaznaczysz całe podane wyżej wyrażenie lub jego odmianę znacznikami <span></span>.
Zwróć tylko odpowiedź JSON, wykorzystując dla każdego wygenerowanego zdania schemat:
[{
  "sentence": "Pierwsze wygenerowane zdanie w pierwszym języku",
  "sentence2":  "Drugie wygenerowane zdanie w drugim języku"
}]

Upewnij się, że odpowiedź to właściwy format JSON`

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{role:"user", content: fullPrompt}],
  });

  res.status(200).json(response.choices[0])
}