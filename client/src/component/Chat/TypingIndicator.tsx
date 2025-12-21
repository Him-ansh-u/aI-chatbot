import { memo } from 'react';
import { LuBot } from 'react-icons/lu';

const TypingIndicator = () => {
  return (
    <div className="flex gap-3">
      <LuBot />
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
      </div>
    </div>
  );
};
export default memo(TypingIndicator);
