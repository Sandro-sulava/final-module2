import { z } from "zod";

export const FeedbackSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
  rating: z.number().int().min(1).max(5),
});

export type FeedbackType = z.infer<typeof FeedbackSchema>;
