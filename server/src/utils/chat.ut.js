const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

export const generateAIResponse = async (contents) => {
  try {
    // const response = await ai.models.generateContent({
    //   model: "gemini-2.5-flash",
    //   contents,
    // });

    // return response?.text || "I couldn't generate a response.";
    return "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    throw new Error("AI generation failed");
  }
};
