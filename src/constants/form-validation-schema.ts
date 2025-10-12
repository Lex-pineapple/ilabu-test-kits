import { z } from "zod";

export const validationSchema = z.object({
  date: z.string().min(2),
  delivery: z.array(z.string()),
  email: z.email(),
  firstName: z.string().min(1),
  gender: z.array(z.string()),
  lastName: z.string().min(1),
  middleName: z.string().min(1),
});
