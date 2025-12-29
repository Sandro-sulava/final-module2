import { Dawning_of_a_New_Day } from "next/font/google";

const BASE_URL =
  process.env.NEXT_PUBLIC_FORTUNE_API_URL || "http://localhost:4000";

//                       Contact[]
export async function safeFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  //                        http://localhost:4000/mindia
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

  return res.json() as Promise<T>;
}
