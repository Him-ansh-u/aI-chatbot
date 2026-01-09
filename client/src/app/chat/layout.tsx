import Sidebar from '@/component/Chat/Sidebar';
import { getMe } from '@/serverAction/auth';
import { getAllChatSA } from '@/serverAction/chat';

const ChatLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  const allChats = await getAllChatSA();

  return (
    <div className="flex h-screen">
      <Sidebar user={user} chats={allChats} />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default ChatLayout;
