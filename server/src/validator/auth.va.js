import { z } from "zod";

const signupSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const loginSchema = z.object({
  phone: z.string(),
  password: z.string()
});

export { signupSchema, loginSchema };