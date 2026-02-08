import { z } from "zod";

export const validationSchema = z.object({
  apartment: z
    .string()
    .min(1, { error: "Введите номер квартиры" })
    .regex(/^\d*$/i, { error: "Доступен ввод только цифр" }),
  building: z
    .string()
    .min(1, { error: "Введите номер дома/корпуса" })
    .max(7, {
      error: "Номер дома/корпуса может содержать не больше 7 символов",
    })
    .regex(/^[\d\sА-яё-]+$/i, {
      error: "Можно ввести только киррилицу или тире",
    }),
  city: z
    .string()
    .min(3, { error: "Введите город доставки" })
    .max(20, { error: "Город доставки может содержать не больше 20 символов" })
    .regex(/^[\sА-яё-]+$/i, {
      error: "Можно ввести только киррилицу или тире",
    }),
  commentary: z.optional(z.string()),
  entryway: z.optional(
    z.string().regex(/^\d*$/i, { error: "Доступен ввод только цифр" }),
  ),
  floor: z.optional(
    z.string().regex(/^\d*$/i, { error: "Доступен ввод только цифр" }),
  ),
  phone: z.string().min(2, { error: "Введите ваш номер телефона" }),
  street: z
    .string()
    .min(2, { error: "Введите улицу доставки" })
    .max(60, { error: "Город доставки может содержать не больше 60 символов" })
    .regex(/^[\sА-яё-]+$/i, {
      error: "Можно ввести только киррилицу или тире",
    }),
});
