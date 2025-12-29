import { safeFetch } from "@/features/lib/apiClient";
import {
  Contact,
  ContactFormData,
  ContactResponse,
} from "../types/contactTypes";

// Get Contact Request
export async function getAllContacts(): Promise<Contact[]> {
  return safeFetch<Contact[]>("api/contact/all", {
    method: "GET",
  });
}

// Post Contact
export async function submitContact(data: ContactFormData): Promise<Contact> {
  return safeFetch<Contact>("api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// Update
export async function markContactAsRead(contactId: string): Promise<Contact> {
  return safeFetch<Contact>(`api/contact/${contactId}/read`, {
    method: "PATCH",
  });
}

// Delete cotnact message           693d324031b7daa3b11bedc8
export async function deleteContact(contactId: string) {
  return safeFetch<ContactResponse>(`api/contact/${contactId}`, {
    method: "DELETE",
  });
}

// facebook.com/api/contact/693d324031b7daa3b11bedc8
