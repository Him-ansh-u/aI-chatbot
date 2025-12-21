import { memo } from 'react';
import { LuSend } from 'react-icons/lu';

const ChatInput = ({
  input,
  setInput,
  sendMessage,
}: {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
}) => {
  return (
    <div className="p-6 border-t border-gray-800 bg-gray-900/30">
      <div className="flex gap-3 bg-gray-800/50 p-2 rounded-2xl">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 px-4 py-3 bg-transparent outline-none text-white"
        />

        <button
          onClick={sendMessage}
          disabled={!input.trim()}
          className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl disabled:opacity-50"
        >
          <LuSend size={20} />
        </button>
      </div>
    </div>
  );
};
export default memo(ChatInput);
