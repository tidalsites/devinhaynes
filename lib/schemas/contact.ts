import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z
    .email()
    .min(4, "Required")
    .max(50, "Cannot be more than 50 characters"),
  description: z.string().min(1, "Required").max(255),
});

export type TContactSchema = z.infer<typeof ContactSchema>;
