export type Sender = 'user' | 'bot';

export interface Message {
  id: number;
  text: string;
  sender: Sender;
}

export interface ChatPayloadSchema {
  message: string;
  chatId?: string;
}

export interface MessageSchema {
  conversationId?: string;
  userId?: string;
  role: 'user' | 'assistant';
  content: string;
  _id: string;
  createdAt?: string;
}


export interface ChatSchema {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}