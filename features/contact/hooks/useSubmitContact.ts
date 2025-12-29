import { useMutation } from "@tanstack/react-query";
import { submitContact } from "../api/contactApi";
import { ContactFormInputs } from "../schemas/contactSchema";

export function useSubmitContact() {
  return useMutation({
    mutationFn: (data: ContactFormInputs) => submitContact(data),
  });
}
