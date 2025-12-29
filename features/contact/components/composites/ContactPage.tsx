"use client";

import { ContactForm } from "../primitives/ContactForm";

export function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600">
          Have a question or feedback? We'd love to hear from you. Fill out the
          form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
