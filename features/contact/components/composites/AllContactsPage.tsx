"use client";

import { useContacts } from "../../hooks/useContacts";
import { ContactCard } from "../primitives/ContactCard";

export function AllContactsPage() {
  const { data: contacts, isLoading, error } = useContacts();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-gray-600">Loading contacts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          Error loading contacts:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Messages</h1>
        <p className="text-gray-600">
          {contacts?.length || 0} message{contacts?.length !== 1 ? "s" : ""}
        </p>
      </div>

      {!contacts || contacts.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          No contact messages yet
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <ContactCard key={contact._id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
}
