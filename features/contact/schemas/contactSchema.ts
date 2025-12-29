import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string(),
  email: z.email("Invalid email address").min(1, "Email is required"),
  subject: z.string(),
  message: z
    .string()
    .min(1, "Message required")
    .min(10, "Message must be at least 10 character"),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;
