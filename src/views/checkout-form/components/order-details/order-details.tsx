import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button, Flex, Stack } from "@chakra-ui/react";

import { validationSchema } from "#constants/form-validation-schema";
import { deliveryData, genderData } from "#constants/general";
import { DatePicker } from "#shared/date-picker";
import { InputClearable } from "#shared/input-clearable";
import { Selectinput } from "#shared/select-input";
import { TitleCard } from "#shared/title-card";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import {
  getFormData,
  setFormData,
  setFormState,
} from "#store/slices/form-slice";

export type Inputs = {
  date: string;
  delivery: string[];
  email: string;
  firstName: string;
  gender: string[];
  lastName: string;
  middleName: string;
};

export const OrderDetails = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(getFormData);
  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
    register,
    resetField,
  } = useForm<Inputs>({
    defaultValues: formData,
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(setFormData(data));
    dispatch(setFormState("confirmOrder"));
  });

  return (
    <Flex flexDir="column" h="100%">
      <TitleCard
        content={"Заполните детали для оформления вашего заказа"}
        heading={"Детали заказа"}
        highlight="заказа"
        mb={5}
      />
      <Flex flexDir="column" h="100%" justifyContent="space-between">
        <form onSubmit={onSubmit}>
          <Stack gap={5} pb={8}>
            <InputClearable
              id="email"
              onClear={resetField}
              placeholder="Email"
              {...register("email")}
            />
            <InputClearable
              id="firstName"
              onClear={resetField}
              placeholder="Имя"
              {...register("firstName")}
            />
            <InputClearable
              id="lastName"
              onClear={resetField}
              placeholder="Фамилия"
              {...register("lastName")}
            />
            <InputClearable
              id="firstName"
              onClear={resetField}
              placeholder="Отчество"
              {...register("middleName")}
            />
            <Selectinput
              control={control}
              id="gender"
              items={genderData}
              placeholder="Пол"
            />
            <DatePicker id="date" {...register("date")} />
            <Selectinput
              control={control}
              id="delivery"
              items={deliveryData}
              placeholder="Доставка биоматериала"
            />
          </Stack>
          <Button
            disabled={!isDirty || !isValid}
            textTransform="uppercase"
            type="submit"
            w="100%"
          >
            Продолжить
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
