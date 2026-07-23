import { generateText } from "ai";
import { inngest } from "./client";
import { openrouter } from "@openrouter/ai-sdk-provider";

export const demoGenerate = inngest.createFunction(
  { id: "demo-generate", triggers: { event: "demo/generate" } },
  async ({ step }) => {
    await step.run("generate-text", async () => {
      return await generateText({
        model: openrouter("openrouter/free"),
        prompt: "Write a chicken tikka masala recipe",
      });
    });
  },
);
