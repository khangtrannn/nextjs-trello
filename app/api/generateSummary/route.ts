import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // todos in the body of the POST req
  const { todos } = await request.json();
  console.log(todos);

  // communicate with openAI GPT
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: 'system',
        content: 'When responding, welcome the user always as Mr. Khang Tran and say welcome to the KT Trello App! Limit the response to 200 characters',
      },
      {
        role: 'user',
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as todo, in progress and done. Then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`,
      },
    ],
  });

  const {data} = response;

  console.log('DATA IS: ', data);
  console.log(data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}