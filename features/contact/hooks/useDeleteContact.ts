import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContact } from "../api/contactApi";
import { CONTACTS_QUERY_KEY } from "./useContacts";

export function useDeleteContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contactId: string) => deleteContact(contactId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CONTACTS_QUERY_KEY });
    },
  });
}
