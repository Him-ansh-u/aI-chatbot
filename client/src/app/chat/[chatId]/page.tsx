import ChatbotUI from '@/component/Chat/Index';
import { getAllChatMessagesSA } from '@/serverAction/chat';

const Page = async ({ params }: { params: { chatId: string } }) => {
  const { chatId } = await params;
  const allMessages = await getAllChatMessagesSA(chatId);

  return <ChatbotUI messages={allMessages} chatId={chatId} />;
};
export default Page;
