import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateWeddingWish = async (senderName: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing for Gemini");
    return "Selamat menempuh hidup baru! Semoga bahagia selalu.";
  }

  try {
    const prompt = `
      Buatkan ucapan pernikahan yang indah, romantis, elegan, dan sopan dalam bahasa Indonesia.
      Ucapan ini dari seseorang bernama "${senderName || 'Teman'}".
      Pasangan pengantin bernama Romeo dan Juliet.
      Panjang ucapan maksimal 2-3 kalimat saja.
      Gunakan gaya bahasa yang hangat dan puitis namun tetap modern.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "Selamat atas pernikahan kalian!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Selamat menempuh hidup baru! Semoga cinta kalian abadi.";
  }
};
