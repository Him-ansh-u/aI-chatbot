import { Router } from "express";
import { signup, login } from "../controllers/auth.ct.js";
import validate from "../middleware/validate.mw.js";
import {
  signupSchema as signupVal,
  loginSchema as loginVal,
} from "../validator/auth.va.js";

const router = Router();

router.post("/signup", validate(signupVal), signup);
router.post("/login", validate(loginVal), login);

export default router;
