import { Router } from "express";
import validate from "../middleware/validate.mw.js";
import { chatSchema as chatVal } from "../validator/chat.va.js";
import authMiddleware from "../middleware/auth.mw.js";
import { getConversation, getUserConversations, sendMessageInConversation, startNewConversation } from "../controllers/chat.ct.js";

const router = Router();

router.get("/", authMiddleware, getUserConversations);
router.post("/new", validate(chatVal), authMiddleware, startNewConversation);
router.get("/:conversationId", authMiddleware, getConversation);
router.post("/:conversationId", validate(chatVal), authMiddleware, sendMessageInConversation);


export default router;
