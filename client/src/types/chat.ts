export type Sender = 'user' | 'bot';

export interface Message {
  id: number;
  text: string;
  sender: Sender;
}

export interface Conversation {
  id: number;
  title: string;
  messages: Message[];
}
