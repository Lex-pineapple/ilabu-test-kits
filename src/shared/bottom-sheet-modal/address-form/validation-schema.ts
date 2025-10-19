import { z } from "zod";

export const validationSchema = z.object({
  apartment: z.string().min(2),
  building: z.string().min(2),
  city: z.string().min(2),
  commentary: z.optional(z.string()),
  entryway: z.optional(z.string()),
  floor: z.optional(z.string()),
  phone: z.string().min(2),
  street: z.string().min(2),
});
