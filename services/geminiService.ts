import { GoogleGenAI } from "@google/genai";


// Correctly initialize the GoogleGenAI client using the environment variable API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Reusable chat session reference
let chatSession: any = null;

/**
 * Returns or initializes the chat session with the appropriate model and system instructions.
 * Uses gemini-3-flash-preview for efficient text conversation.
 */
export const getChatSession = () => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

/**
 * Sends a message to the Gemini model and returns a stream of responses.
 */
export const sendMessageStream = async (message: string) => {
  const chat = getChatSession();
  // sendMessageStream accepts the message directly as a parameter
  return await chat.sendMessageStream({ message });
};
