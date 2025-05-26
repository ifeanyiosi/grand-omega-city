import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(50, { message: "First name can't exceed 50 characters" }),

  lastName: z
    .string()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(50, { message: "Last name can't exceed 50 characters" }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(50, { message: "Email can't exceed 50 characters" }),

  content: z
    .string()
    .min(2, { message: "Message must be at least 2 characters long" })
    .max(50, { message: "Message can't exceed 50 characters" }),
});
