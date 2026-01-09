'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { LuMessageSquare, LuPlus } from 'react-icons/lu';
import { ChatSchema } from '@/types/chat';
import { UserSchema } from '@/types/auth';
import { useState } from 'react';
import ChatHeader from './ChatHeader';
import UserInfo from './UserInfo';

type Props = {
  user: UserSchema,
  chats: ChatSchema[];
};

export default function Sidebar({
  user,
  chats,
}: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const activeChatId = useSelectedLayoutSegment();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'w-72' : 'w-0'
      } transition-all bg-gray-900/50 border-r border-gray-800 overflow-hidden flex flex-col h-screen`}
    >
      <ChatHeader
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        sidebarHeader={isSidebarOpen}
      />

      {/* New Chat */}
      <div className="p-4">
        <Link
          prefetch={false}
          href='/chat/new'
          className="w-full flex items-center cursor-pointer gap-2 bg-linear-to-r from-blue-600 to-purple-600 p-3 rounded-xl hover:opacity-90 transition"
        >
          <LuPlus size={18} />
          New Chat
        </Link>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {chats.map((chat) => {
          const isActive = chat._id === activeChatId;

          return (
            <Link
              key={chat._id}
              href={`/chat/${chat._id}`}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
                isActive ? 'bg-blue-600/20 text-white' : 'hover:bg-gray-800 text-gray-300'
              }`}
            >
              <LuMessageSquare size={16} />
              <span className="truncate">{chat.title}</span>
            </Link>
          );
        })}
      </div>
      <UserInfo user={user} />
    </aside>
  );
}