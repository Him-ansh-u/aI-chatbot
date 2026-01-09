'use server';

import { CHAT_API, CHAT_NEW } from '@/data/endpoints';
import { ChatPayloadSchema, ChatSchema, MessageSchema } from '@/types/chat';
import { fetchData } from '@/utils/fetch.ut';

const startNewChatSA = async (payload: ChatPayloadSchema) => {
  const res = await fetchData({
    url: CHAT_NEW,
    method: 'POST',
    body: payload,
  });
  return res as MessageSchema;
};

const getAllChatSA = async () => {
  const res = await fetchData({
    url: CHAT_API,
    method: 'GET',
  });
  return res as ChatSchema[];
};

const getAllChatMessagesSA = async (chatId: string) => {
  const res = await fetchData({
    url: `${CHAT_API}${chatId}`,
    method: 'GET',
  });
  return res as MessageSchema[];
};

const sendMessageSA = async (payload: ChatPayloadSchema) => {
  const { chatId, message } = payload || {};
  const res = await fetchData({
    url: `${CHAT_API}${chatId}`,
    method: 'POST',
    body: { message },
  });
  return res as MessageSchema;
};

export { startNewChatSA, getAllChatSA, getAllChatMessagesSA, sendMessageSA };
