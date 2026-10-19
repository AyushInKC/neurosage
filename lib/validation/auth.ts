import { z } from "zod";
export const registerSchema = z.object({ name: z.string().min(2).max(80), email: z.string().email().transform(v => v.toLowerCase().trim()), password: z.string().min(8).max(128), confirmPassword: z.string(), consent: z.literal(true), consentNonEssential: z.boolean().optional().default(false) }).refine(v => v.password === v.confirmPassword, { path: ["confirmPassword"], message: "Passwords do not match" });
export const loginSchema = z.object({ email: z.string().email().transform(v => v.toLowerCase().trim()), password: z.string().min(1) });
