import { generateText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST() {
  const response = await generateText({
    model: openrouter("openrouter/free"),
    prompt: "Write a chicken tikka masala recipe for 4 people",
  });

  return Response.json({ response });
}
