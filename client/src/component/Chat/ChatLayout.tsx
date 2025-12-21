import { Conversation } from '@/types/chat';
import { memo } from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import MessageList from './MessageList';
import Sidebar from './Sidebar';

interface Props {
  conversations: Conversation[];
  activeConv?: Conversation;
  activeConvId: number;
  setActiveConvId: (id: number) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  newConversation: () => void;
  input: string;
  setInput: (v: string) => void;
  sendMessage: () => void;
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const ChatLayout = (props: Props) => {
  return (
    <div className="flex h-screen bg-linear-to-br from-gray-950 via-gray-900 to-gray-950">
      <Sidebar {...props} />
      <div className="flex-1 flex flex-col">
        <ChatHeader toggleSidebar={props.toggleSidebar} />
        <MessageList {...props} />
        <ChatInput {...props} />
      </div>
    </div>
  );
};
export default memo(ChatLayout);
