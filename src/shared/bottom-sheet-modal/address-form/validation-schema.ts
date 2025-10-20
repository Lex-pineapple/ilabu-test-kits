import { z } from "zod";

export const validationSchema = z.object({
  apartment: z.string().min(2, { error: "Введите номер квартиры" }),
  building: z.string().min(2, { error: "Введите номер дома" }),
  city: z.string().min(2, { error: "Введите город доставки" }),
  commentary: z.optional(z.string()),
  entryway: z.optional(z.string()),
  floor: z.optional(z.string()),
  phone: z.string().min(2, { error: "Введите ваш номер телефона" }),
  street: z.string().min(2, { error: "Введите улицу доставки" }),
});
