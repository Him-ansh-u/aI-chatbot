import { Conversation } from '@/types/chat';
import { LuMessageSquare, LuPlus } from 'react-icons/lu';

export default function Sidebar({
  conversations,
  activeConvId,
  setActiveConvId,
  newConversation,
  sidebarOpen,
}: {
  conversations: Conversation[];
  activeConvId: number | null;
  setActiveConvId: (id: number) => void;
  newConversation: () => void;
  sidebarOpen: boolean;
}) {
  return (
    <div
      className={`${
        sidebarOpen ? 'w-72' : 'w-0'
      } transition-all bg-gray-900/50 border-r border-gray-800 overflow-hidden`}
    >
      <div className="p-4">
        <button
          onClick={newConversation}
          className="w-full flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl"
        >
          <LuPlus size={18} />
          New Chat
        </button>
      </div>

      <div className="p-2 space-y-2">
        {conversations.map((conv: Conversation) => (
          <button
            key={conv.id}
            onClick={() => setActiveConvId(conv.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl ${
              activeConvId === conv.id ? 'bg-blue-600/20' : 'hover:bg-gray-800'
            }`}
          >
            <LuMessageSquare size={16} />
            <span className="truncate">{conv.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
