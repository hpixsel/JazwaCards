/* import { OpenAI } from "openai";

export async function chatGPT(key, prompt) {
  const openai = new OpenAI({apiKey: key, dangerouslyAllowBrowser: true})

  const fullPrompt = `CSV:
${prompt}

Wykorzystaj wszystkie słowa podane w formacie CSV i stwórz z nich zestaw krótkich zdań w języku polskim i angielskim, w wygenerowanych zdaniach zaznacz całe podane wyżej wyrażenie lub jego odmianę znacznikami <span></span>.
Zwróć tylko odpowiedź JSON, wykorzystując dla każdego wygenerowanego zdania schemat:
[{
  "sentence": "Pierwsze wygenerowane zdanie w języku polskim"
  "sentence2":  "Drugie wygenerowane zdanie w języku angielskim"
}]`

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{role:"user", content: fullPrompt}],
  });
  
  return response.choices[0];
} */