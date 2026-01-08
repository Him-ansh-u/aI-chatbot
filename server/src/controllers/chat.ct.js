import mongoose from "mongoose";
import { Conversation } from "../models/Conversation.mo.js";
import { Message } from "../models/Message.mo.js";
import { generateAIResponse } from "../utils/chat.ut.js";

const getUserConversations = async (req, res) => {
  try {
    const userId = req.user.userId;

    const conversations = await Conversation.find({ userId })
      .select("_id title createdAt updatedAt")
      .sort({ updatedAt: -1 });

    return res.status(200).json(conversations);
  } catch (error) {
    console.error("Get conversations error:", error);

    return res.status(500).json({
      error: "Failed to fetch conversations",
    });
  }
};

const startNewConversation = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const userId = req.user.userId;
    const message = req.body.message;

    // 1️⃣ Create conversation
    const [conversation] = await Conversation.create(
      [
        {
          userId,
          title: message.slice(0, 40),
        },
      ],
      { session }
    );

    // 2️⃣ Generate AI response
    const aiResponse = await generateAIResponse(message);

    // 3️⃣ Save both messages together
    const messages = await Message.insertMany(
      [
        {
          conversationId: conversation._id,
          userId,
          role: "user",
          content: message,
        },
        {
          conversationId: conversation._id,
          userId,
          role: "assistant",
          content: aiResponse,
        },
      ],
      { session }
    );

    // 4️⃣ Commit transaction
    await session.commitTransaction();
    session.endSession();

    const [, assistantMessage] = messages;

    return res.status(201).json(assistantMessage);
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("Start conversation error:", error);

    return res.status(500).json({
      error: "Failed to start conversation",
    });
  }
};

const getConversation = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { conversationId } = req.params;

    // 1️⃣ Ownership check
    const conversation = await Conversation.findOne({
      _id: conversationId,
      userId,
    }).select("_id");

    if (!conversation) {
      return res.status(404).json({
        error: "Conversation not found",
      });
    }

    // 2️⃣ Fetch messages
    const messages = await Message.find({ conversationId })
      .select("_id role content createdAt")
      .sort({ createdAt: 1 });

    return res.status(200).json(messages);
  } catch (error) {
    console.error("Get conversation error:", error);

    return res.status(500).json({
      error: "Failed to fetch conversation",
    });
  }
};

const sendMessageInConversation = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const userId = req.user.userId;
    const { conversationId } = req.params;
    const message = req.body.message;

    // 1️⃣ Verify conversation ownership
    const conversation = await Conversation.findOne(
      { _id: conversationId, userId },
      null,
      { session }
    );

    if (!conversation) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ error: "Conversation not found" });
    }

    // 2️⃣ Generate AI response
    const aiResponse = await generateAIResponse(message);

    // 3️⃣ Save both messages together
    const messages = await Message.insertMany(
      [
        {
          conversationId,
          userId,
          role: "user",
          content: message,
        },
        {
          conversationId,
          userId,
          role: "assistant",
          content: aiResponse,
        },
      ],
      { session }
    );

    // 4️⃣ Update conversation timestamp
    conversation.updatedAt = new Date();
    await conversation.save({ session });

    // 5️⃣ Commit
    await session.commitTransaction();
    session.endSession();

    // 6️⃣ Return only assistant message
    const [, assistantMessage] = messages;

    return res.status(201).json(assistantMessage);
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("Send message error:", error);

    return res.status(500).json({
      error: "Failed to send message",
    });
  }
};

export { getUserConversations, startNewConversation, getConversation, sendMessageInConversation };