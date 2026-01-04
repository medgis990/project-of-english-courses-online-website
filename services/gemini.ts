
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTutorResponse = async (history: { role: string; text: string }[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are a friendly, professional English tutor at EnglishFlow Academy. 
        Your goal is to help students practice their English conversation, correct their grammar gently, 
        and suggest better ways to phrase their sentences. Always encourage the student. 
        Keep responses concise and engaging. Ask follow-up questions to keep the conversation going.`,
      },
    });

    // Simple history conversion for compatibility if needed, 
    // but chat.sendMessage history is handled internally usually.
    // Here we'll just send the message.
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having a bit of a technical glitch. Let's try that again!";
  }
};
