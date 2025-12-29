"use client";

import { useDeleteContact } from "../../hooks/useDeleteContact";
import { useMarkContactAsRead } from "../../hooks/useMarkContactAsRead";
import { Contact } from "../../types/contactTypes";

/**
 * ContactCard Component
 * Displays a single contact message (for admin view)
 */

type ContactCardProps = {
  contact: Contact;
};

export function ContactCard({ contact }: ContactCardProps) {
  //
  const { mutate: markAsRead, isPending: isReadPending } =
    useMarkContactAsRead();

  const { mutate: deleteMsg, isPending: isDeletePending } = useDeleteContact();

  const handleMarkAsRead = () => {
    markAsRead(contact._id);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this message?")) {
      deleteMsg(contact._id);
    }
  };

  const createdDate = new Date(contact.createdAt).toLocaleDateString();

  return (
    <div
      className={`p-4 border rounded-lg ${
        contact.isRead
          ? "bg-gray-50 border-gray-200"
          : "bg-blue-50 border-blue-300"
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">
            {contact.subject || "No Subject"}
          </h3>
          <p className="text-sm text-gray-600">
            From: {contact.name || contact.email}
          </p>
          <p className="text-xs text-gray-500">{contact.email}</p>
          <p className="text-xs text-gray-500">{createdDate}</p>
        </div>
        {!contact.isRead && (
          <span className="px-2 py-1 text-xs bg-blue-200 text-blue-800 rounded">
            Unread
          </span>
        )}
      </div>

      <p className="mb-4 text-gray-700">{contact.message}</p>

      <div className="flex gap-2">
        {!contact.isRead && (
          <button
            onClick={handleMarkAsRead}
            disabled={isReadPending}
            className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          >
            {isReadPending ? "Marking..." : "Mark as Read"}
          </button>
        )}
        <button
          onClick={handleDelete}
          disabled={isDeletePending}
          className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
        >
          {isDeletePending ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
