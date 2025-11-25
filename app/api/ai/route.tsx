import { NextRequest, NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  // instantiate a model
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    temperature: 0.8,
    apiKey: process.env.GEMINI_API_KEY,
  });

  try {
    // create a prompt template
    const promptTemplate = PromptTemplate.fromTemplate("{prompt}");

    const chain = promptTemplate.pipe(model);

    const result = await chain.invoke({ prompt });

    const output = result.content;
    return NextResponse.json({ output });
  } catch (err) {
    console.error({ err });

    NextResponse.json(
      { error: "An error occured while getting LLM response" },
      { status: 500 }
    );
  }
}
