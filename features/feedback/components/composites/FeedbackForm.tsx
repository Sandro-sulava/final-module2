"use client";

import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useFeedback } from "../../hooks/useFeedback";
import { Input } from "../primitives/Input";
import { FeedbackSchema, FeedbackType } from "../../schemas/feedbackSchema";

export const FeedbackForm = () => {
  const { submit, isSubmitting, error, success } = useFeedback();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackType>({
    resolver: zodResolver(FeedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      rating: 5,
    },
  });

  const onSubmit = async (values: FeedbackType) => {
    const result = await submit(values);
    if (result.success) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md space-y-4 p-6 border rounded-xl bg-white shadow-sm"
    >
      <h2 className="text-xl font-bold">Feedback</h2>

      <Input
        label="Name"
        registration={register("name") as unknown as UseFormRegisterReturn}
        error={errors.name?.message}
      />

      <Input
        label="Email"
        type="email"
        registration={register("email") as unknown as UseFormRegisterReturn}
        error={errors.email?.message}
      />

      <Input
        label="Message"
        textarea
        rows={4}
        registration={register("message") as unknown as UseFormRegisterReturn}
        error={errors.message?.message}
      />

      <input type="hidden" {...register("rating", { valueAsNumber: true })} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-2.5 rounded-md hover:bg-zinc-800 disabled:bg-zinc-400"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>

      {success && <p className="text-green-600 text-sm">Feedback sent!</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
};
