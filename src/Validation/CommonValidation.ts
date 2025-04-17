import { z } from 'zod';

export const emailSchema = z.string().email({ message: "Invalid email" }).min(1, { message: "Email is required" });
export const phoneSchema = z.string().regex(/^01[1520]\d{8}$/, { message: "Phone must be an Egyptian number" }).min(1, "Phone is required");

export const passwordSchema = z.string().min(6, { message: "Password must be 6-8 characters long and include a special character" }).regex(/^(?=.*[!@#$%^&*(),.?":{}<>])[A-Za-z\d!@#$%^&*(),.?":{}<>]{6,20}$/);