'use client';
import { Conversation, Message } from '@/types/chat';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import ChatLayout from './ChatLayout';

const generateId = () => Date.now();

const ChatbotUI = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    { id: 1, title: 'New Conversation', messages: [] },
  ]);
  const [activeConvId, setActiveConvId] = useState(1);
  const [input, setInput] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const activeConv = conversations.find((c) => c.id === activeConvId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [activeConv?.messages, isTyping]);

  const sendMessage = useCallback(() => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: generateId(),
      text: input,
      sender: 'user',
    };

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === activeConvId
          ? {
              ...conv,
              title: conv.messages.length === 0 ? input.slice(0, 30) : conv.title,
              messages: [...conv.messages, userMsg],
            }
          : conv
      )
    );

    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: generateId(),
        text: "I'm a demo chatbot with a stunning UI! This is a simulated response.",
        sender: 'bot',
      };

      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === activeConvId ? { ...conv, messages: [...conv.messages, botMsg] } : conv
        )
      );
      setIsTyping(false);
    }, 1500);
  }, [input, activeConvId]);

  const newConversation = () => {
    const newId = generateId();
    setConversations((prev) => [...prev, { id: newId, title: 'New Conversation', messages: [] }]);
    setActiveConvId(newId);
  };

  return (
    <ChatLayout
      conversations={conversations}
      activeConv={activeConv}
      activeConvId={activeConvId}
      setActiveConvId={setActiveConvId}
      sidebarOpen={sidebarOpen}
      toggleSidebar={() => setSidebarOpen((p) => !p)}
      newConversation={newConversation}
      input={input}
      setInput={setInput}
      sendMessage={sendMessage}
      isTyping={isTyping}
      messagesEndRef={messagesEndRef}
    />
  );
};

export default memo(ChatbotUI);
