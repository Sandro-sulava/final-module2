import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markContactAsRead } from "../api/contactApi";
import { CONTACTS_QUERY_KEY } from "./useContacts";

export function useMarkContactAsRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contactId: string) => markContactAsRead(contactId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CONTACTS_QUERY_KEY });
    },
  });
}
