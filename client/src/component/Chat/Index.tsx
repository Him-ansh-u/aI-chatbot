  'use client';

  import { memo, useCallback, useRef, useState, startTransition } from 'react';
  import ChatHeader from './ChatHeader';
  import MessageList from './MessageList';
  import ChatInput from './ChatInput';
  import { ChatPayloadSchema, MessageSchema } from '@/types/chat';
  import { sendMessageSA, startNewChatSA } from '@/serverAction/chat';
  import { useRouter } from 'next/navigation';

  const ChatbotUI = ({
    messages,
    chatId,
  }: {
    messages: MessageSchema[];
    chatId?: string;
  }) => {
    const [allMessages, setAllMessages] = useState<MessageSchema[]>(messages || []);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const sendMessage = useCallback(async () => {
      const trimmed = input.trim();
      if (!trimmed) return;

      // 1️⃣ Optimistically render user message
      const optimisticUserMessage: MessageSchema = {
        _id: Date.now().toString(),
        content: trimmed,
        role: 'user',
      };

      setAllMessages((prev) => [...prev, optimisticUserMessage]);
      setInput('');
      setIsTyping(true);
      scrollToBottom();

      try {
        const payload: ChatPayloadSchema = {
          message: trimmed,
        };

        // 2️⃣ New chat flow
        if (!chatId) {
          const res = await startNewChatSA(payload);

          // 3️⃣ Soft navigation (NON-BLOCKING)
          startTransition(() => {
            window.location.href =`/chat/${res?.conversationId}`;
          });
          
          setIsTyping(false);
          return;
        }

        // 4️⃣ Existing chat flow
        const res = await sendMessageSA({ ...payload, chatId });

        setAllMessages((prev) => [...prev, res]);
        setIsTyping(false);
        scrollToBottom();
      } catch (error) {
        setIsTyping(false);

        const errorMessage =
          error instanceof Error
            ? error.message
            : 'Error sending message. Please try again.';

        setAllMessages((prev) => [
          ...prev,
          {
            _id: Date.now().toString(),
            content: errorMessage,
            role: 'assistant',
          },
        ]);

        scrollToBottom();
      }
    }, [input, chatId, router]);

    return (
      <div className="flex-1 flex flex-col h-full">
        <ChatHeader />
        <MessageList
          messages={allMessages}
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
        />
        <ChatInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
      </div>
    );
  };

  export default memo(ChatbotUI);
