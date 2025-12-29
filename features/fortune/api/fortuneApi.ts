import { safeFetch } from "@/features/lib/apiClient";
import type { Fortune, SaveFortunePayload } from "../types/fortuneTypes";

export function getRandomFortune() {
  return safeFetch<Fortune>("/api/fortune/random");
}

export function saveFortune(payload: SaveFortunePayload) {
  return safeFetch("/api/fortune/save", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
