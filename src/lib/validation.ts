import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");
export const testomonialSchema = z.object({
  comment: requiredString,
  name: requiredString,
  vidio: z.string().optional(),
});

export type TestomonialValues = z.infer<typeof testomonialSchema>;

export const sponsorSchema = z.object({
  name: requiredString,
  phoneNumber: requiredString,
  Country: requiredString,
  state: requiredString,
  amount:  z.coerce.number().min(2000, "Amount must be at least ₹2000 or more"),
});

export type SponsorValues = z.infer<typeof sponsorSchema>;

export const appoinmetSchema = z.object({
  name: requiredString,
  phoneNumber: requiredString,
  Country: requiredString,
  state: requiredString,
});

export type AppoinmetValues = z.infer<typeof appoinmetSchema>;
