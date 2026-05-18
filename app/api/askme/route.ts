import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages, system } = await req.json();

    const apiKey = process.env.GROQ_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json({ error: 'GROQ_API_KEY is not set in .env.local' }, { status: 500 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: system },
          ...messages
        ],
        max_tokens: 300,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Groq API Error Response:', response.status, data);
      return NextResponse.json(data, { status: response.status });
    }

    const textResponse = data.choices?.[0]?.message?.content || "Maaf, saya tidak bisa memberikan jawaban saat ini.";

    return NextResponse.json({ text: textResponse });
  } catch (error) {
    console.error('Groq API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
