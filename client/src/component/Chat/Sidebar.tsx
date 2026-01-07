'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment, useRouter } from 'next/navigation';
import { LuMessageSquare, LuPlus, LuLogOut, LuUser, LuChevronRight } from 'react-icons/lu';
import { Conversation } from '@/types/chat';
import { UserSchema } from '@/types/auth';
import { useState } from 'react';
import ChatHeader from './ChatHeader';
import UserInfo from './UserInfo';

type Props = {
  user: UserSchema,
  conversations: Conversation[];
};

export default function Sidebar({
  user,
  conversations,
}: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const activeChatId = useSelectedLayoutSegment();
  const router = useRouter();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <aside
      className={`${
        isSidebarOpen ? 'w-72' : 'w-0'
      } transition-all bg-gray-900/50 border-r border-gray-800 overflow-hidden flex flex-col h-screen`}
    >
      <ChatHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} sidebarHeader={isSidebarOpen} />
      
      {/* New Chat */}
      <div className="p-4">
        <button
          onClick={() => {}}
          className="w-full flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl hover:opacity-90 transition"
        >
          <LuPlus size={18} />
          New Chat
        </button>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {conversations.map((conv) => {
          const isActive = conv.id === activeChatId;

          return (
            <Link
              key={conv.id}
              href={`/chat/${conv.id}`}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
                isActive
                  ? 'bg-blue-600/20 text-white'
                  : 'hover:bg-gray-800 text-gray-300'
              }`}
            >
              <LuMessageSquare size={16} />
              <span className="truncate">{conv.title}</span>
            </Link>
          );
        })}
      </div>
      <UserInfo user={user} />
    </aside>
  );
}