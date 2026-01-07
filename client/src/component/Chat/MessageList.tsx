import { Conversation } from '@/types/chat';
import { memo } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface Props {
  activeConv?: Conversation;
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const MessageList = ({ activeConv, isTyping, messagesEndRef }: Props) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-6 h-full">
      {activeConv?.messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};
export default memo(MessageList);
