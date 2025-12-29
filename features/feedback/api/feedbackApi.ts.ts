import { FeedbackType } from "../schemas/feedbackSchema";

export const postFeedback = async (payload: FeedbackType): Promise<void> => {
  const endpoint = process.env.NEXT_PUBLIC_FORTUNE_API_URL;

  if (!endpoint) throw new Error("Environment variable missing.");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
};

export const getFeedbackById = async (id: string): Promise<any> => {
  const baseUrl = process.env.NEXT_PUBLIC_FORTUNE_API_URL;
  const endpoint = `${baseUrl}/${id}`;

  const response = await fetch(endpoint);
  if (!response.ok) throw new Error("ID not found");
  return response.json();
};
