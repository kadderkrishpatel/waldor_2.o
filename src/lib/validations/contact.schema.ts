import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name is too long"),

  lastName: z.string().trim().max(50, "Last name is too long").optional(),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

  treatment: z.array(z.string()).optional(),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
