"use server";

import { ZodError } from "zod";
import { ContactSchema, type TContactSchema } from "@/lib/schemas/contact";
import { sendSESEmail } from "./ses";

export type EmailResponse = {
  success: boolean;
  error: ZodError<TContactSchema> | null | "unknown";
};

export const sendEmail = async (
  formData: TContactSchema,
): Promise<EmailResponse> => {
  const validationResults = ContactSchema.safeParse(formData);

  if (!validationResults.success) {
    return { success: false, error: validationResults.error };
  }

  const sent = await sendSESEmail(formData);

  if (sent) {
    return { success: true, error: null };
  }

  return { success: false, error: "unknown" };
};
