import { z } from "zod";

export const validationSchema = z
  .object({
    date: z.string().min(2),
    delivery: z.string(),
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
    email: z.email(),
    firstName: z.string().min(1),
    gender: z.string(),
    labAdressId: z.optional(z.any()),
    lastName: z.string().min(1),
    middleName: z.string().min(1),
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
