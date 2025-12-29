import { useQuery } from "@tanstack/react-query";
import { getAllContacts } from "../api/contactApi";

export const CONTACTS_QUERY_KEY = ["contacts"];

export function useContacts() {
  return useQuery({
    queryKey: CONTACTS_QUERY_KEY,
    queryFn: () => getAllContacts(),
  });
}
