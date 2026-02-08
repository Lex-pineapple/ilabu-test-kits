import { z } from "zod";

import { isDOBValid } from "#utils/is-dob-valid";

export const validationSchema = z
  .object({
    date: z
      .string()
      .min(2, { error: "Укажите дату рождения" })
      .refine((date) => isDOBValid(date), {
        message: "Возраст должен быть от 18 до 100 лет",
      }),
    delivery: z.string().min(1, { error: "Выберите способ доставки" }),
    deliveryAddress: z.optional(
      z.object({
        apartment: z.string(),
        building: z.string(),
        city: z.string(),
        commentary: z.optional(z.string()),
        entryway: z.optional(z.string()),
        floor: z.optional(z.string()),
        phone: z.string(),
        street: z.string(),
      }),
    ),
    email: z.email("Введите корректный e-mail"),
    firstName: z
      .string()
      .min(2, { error: "Имя не должно быть пустым" })
      .max(20, { error: "Имя может содержать не больше 20 символов" })
      .regex(/^[\s'А-яё-]+$/i, {
        error: "Можно ввести только киррилицу, апостроф или тире",
      }),
    gender: z.string().min(1, { error: "Выберите пол" }),
    labAdressId: z.optional(z.any()),
    lastName: z
      .string()
      .min(2, { error: "Фамилия не должна быть пустой" })
      .max(20, { error: "Фамилия может содержать не больше 20 символов" })
      .regex(/^[\s'А-яё-]+$/i, {
        error: "Можно ввести только киррилицу, апостроф или тире",
      }),
    middleName: z
      .string()
      .min(2, { error: "Отчество не должно быть пустым" })
      .max(20, { error: "Отчество может содержать не больше 20 символов" })
      .regex(/^[\s'А-яё-]+$/i, {
        error: "Можно ввести только киррилицу, апостроф или тире",
      }),
  })
  .superRefine((val, ctx) => {
    if (
      val.delivery === "courier" &&
      !val.deliveryAddress?.city &&
      !val.deliveryAddress?.apartment &&
      !val.deliveryAddress?.building &&
      !val.deliveryAddress?.phone &&
      !val.deliveryAddress?.street
    )
      ctx.addIssue({
        code: "custom",
        message: "Выберите адрес доставки",
        path: ["deliveryAddress"],
      });

    if (val.delivery === "personal" && !val.labAdressId)
      ctx.addIssue({
        code: "custom",
        message: "Выберите адрес лаборатории",
        path: ["labAdressId"],
      });
  });
