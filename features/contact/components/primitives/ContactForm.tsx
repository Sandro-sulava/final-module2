"use client";

/**
 * ContactForm Component
 * Form for submitting contact messages using react-hook-form and zod
 */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSubmitContact } from "../../hooks/useSubmitContact";
import { useEffect } from "react";
import {
  type ContactFormInputs,
  contactFormSchema,
} from "../../schemas/contactSchema";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const {
    mutate: submitContact,
    isPending,
    isSuccess,
    error,
  } = useSubmitContact();

  const onSubmit = (data: ContactFormInputs) => {
    submitContact(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name (Optional)
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email *
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="your.email@example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium">
          Subject (Optional)
        </label>
        <input
          {...register("subject")}
          type="text"
          placeholder="What is this about?"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message *
        </label>
        <textarea
          {...register("message")}
          placeholder="Your message here..."
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md">
          {error instanceof Error ? error.message : "Failed to submit contact"}
        </div>
      )}

      {/* Success Message */}
      {isSuccess && (
        <div className="p-3 bg-green-100 text-green-700 rounded-md">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
