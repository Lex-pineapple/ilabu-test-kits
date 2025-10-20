import { z } from "zod";

export const validationSchema = z
  .object({
    date: z.string().min(2, { error: "Укажите дату рождения" }),
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
    firstName: z.string().min(1, { error: "Имя не должно быть пустым" }),
    gender: z.string().min(1, { error: "Выберите пол" }),
    labAdressId: z.optional(z.any()),
    lastName: z.string().min(1, { error: "Фамилия не должна быть пустой" }),
    middleName: z.string().min(1, { error: "Отчество не должно быть пустым" }),
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
