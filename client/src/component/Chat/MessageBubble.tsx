import { MessageSchema } from '@/types/chat';
import { memo } from 'react';
import { LuBot, LuUser } from 'react-icons/lu';

const MessageBubble = ({ data }: { data: MessageSchema }) => {
  const { content, role } = data || {};
  const isUser = role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <LuBot size={22} />}

      <div
        className={`px-5 py-4 rounded-2xl max-w-2xl ${
          isUser
            ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white'
            : 'bg-gray-800 text-gray-100'
        }`}
      >
        {content}
      </div>

      {isUser && <LuUser size={22} />}
    </div>
  );
};

export default memo(MessageBubble);
