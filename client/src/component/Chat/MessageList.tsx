import { MessageSchema } from '@/types/chat';
import { memo } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface Props {
  messages: MessageSchema[];
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const MessageList = ({ messages, isTyping, messagesEndRef }: Props) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-6 h-full">
      {messages.map((msg) => (
        <MessageBubble key={msg._id} data={msg} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};
export default memo(MessageList);
