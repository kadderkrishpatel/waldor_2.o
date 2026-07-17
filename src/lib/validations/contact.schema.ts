import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),

  lastName: z.string().optional(),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z.string().optional(),

  treatment: z.string().optional(),

  message: z.string().trim().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
