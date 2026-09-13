import { z } from "zod";

export const bookingFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your full name." }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone number." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  preferredTreatment: z
    .string()
    .min(1, { message: "Please select a treatment." }),
  preferredDate: z
    .string()
    .min(1, { message: "Please choose a preferred date." }),
  preferredTime: z
    .string()
    .min(1, { message: "Please choose a preferred time." }),
  message: z.string().optional(),
});

export type BookingSubmission = z.infer<typeof bookingFormSchema>;