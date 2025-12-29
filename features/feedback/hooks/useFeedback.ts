import { useState } from "react";
import { FeedbackType } from "../schemas/feedbackSchema";
import { postFeedback } from "../api/feedbackApi.ts";

export const useFeedback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = async (data: FeedbackType) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await postFeedback(data);
      setSuccess(true);
      return { success: true };
    } catch (err: any) {
      setError(err.message || "An error occurred");
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submit, isSubmitting, error, success };
};
