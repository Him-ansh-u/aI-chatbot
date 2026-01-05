import { Router } from "express";
import { signup, login, getMe } from "../controllers/auth.ct.js";
import validate from "../middleware/validate.mw.js";
import {
  signupSchema as signupVal,
  loginSchema as loginVal,
} from "../validator/auth.va.js";
import authMiddleware from "../middleware/auth.mw.js";

const router = Router();

router.post("/signup", validate(signupVal), signup);
router.post("/login", validate(loginVal), login);
router.get("/me", authMiddleware, getMe);


export default router;
