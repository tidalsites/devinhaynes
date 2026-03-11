"use client";

import { ContactSchema, TContactSchema } from "@/lib/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { sendEmail } from "@/lib/email/actions";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TContactSchema>({
    resolver: zodResolver(ContactSchema),
  });

  async function sendContactForm(data: TContactSchema) {
    const results = await sendEmail(data);

    if (results.success) {
      toast.success("Email sent successfully. We'll be in touch shortly");
    }

    if (!results.success) {
      if (results.error === "unknown") {
        toast.error("We were unable to process your request.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
    reset();
  }
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(sendContactForm)}
    >
      <div>
        <label
          htmlFor="name"
          className="text-sm text-neutral-700 dark:text-neutral-400"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="w-full border border-neutral-400 dark:border-neutral-800 rounded-md px-2 py-1 bg-neutral-200 dark:bg-neutral-800 focus-visible:outline-slate-800 dark:focus-visible:outline-slate-500 focus-visible:outline autofill:bg-neutral-700"
        />
        {errors && errors["name"] && (
          <span className="text-xs text-red-400 dark:text-red-500 mt-px">
            {errors["name"].message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-sm text-neutral-700 dark:text-neutral-400"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="w-full border border-neutral-400 dark:border-neutral-800 rounded-md px-2 py-1 bg-neutral-200 dark:bg-neutral-800 focus-visible:outline-slate-800 dark:focus-visible:outline-slate-500 focus-visible:outline autofill:bg-neutral-700"
        />
        {errors && errors["email"] && (
          <span className="text-xs text-red-400 dark:text-red-500 mt-px">
            {errors["email"].message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-sm text-neutral-700 dark:text-neutral-400"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("description")}
          className="w-full border border-neutral-400 dark:border-neutral-800 rounded-md px-2 py-1 bg-neutral-200 dark:bg-neutral-800 focus-visible:outline-slate-800 dark:focus-visible:outline-slate-500 focus-visible:outline autofill:bg-neutral-700"
        />
        {errors && errors["description"] && (
          <span className="text-xs text-red-400 dark:text-red-500 mt-px">
            {errors["description"].message}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="border-neutral-400 dark:border-neutral-800 border px-4 py-1 rounded-md bg-slate-500 text-neutral-100 dark:bg-slate-800 hover:bg-slate-600 hover:dark:bg-slate-700"
      >
        Send Message
      </button>
    </form>
  );
};
