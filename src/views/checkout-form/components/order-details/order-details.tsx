import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button, Flex, Stack, Text } from "@chakra-ui/react";

import { LabContent } from "#/views/checkout-form/components/order-details/components/lab-content";
import { CollapsibleIcon } from "#assets/icons/collapsible-icon";
import { validationSchema } from "#constants/form-validation-schema";
import { deliveryData, genderData } from "#constants/general";
import { bottomSheetModal } from "#shared/bottom-sheet-modal";
import type { AddressFormInputs } from "#shared/bottom-sheet-modal/address-form/address-form";
import { DatePicker } from "#shared/date-picker";
import { InputClearable } from "#shared/input-clearable";
import { SelectButton } from "#shared/select-button";
import { TitleCard } from "#shared/title-card";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import {
  getFormData,
  setFormData,
  setFormState,
} from "#store/slices/form-slice";

export type Inputs = {
  date: string;
  delivery: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  middleName: string;
  deliveryAddress?: AddressFormInputs;
  labAdressId?: string;
};

const deliveryLabsData = [
  {
    address: "г. Минск, ул. Газеты Звезда 23",
    name: "ИНВИТРО",
    time: "до 19:00",
    value: "1",
  },
  {
    address: "г. Минск, ул. Газеты Звезда 23",
    name: "ИНВИТРО",
    time: "до 19:00",
    value: "2",
  },
];

export const OrderDetails = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(getFormData);
  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
    resetField,
    setValue,
    trigger,
    watch,
  } = useForm<Inputs>({
    defaultValues: formData,
    resolver: zodResolver(validationSchema),
    reValidateMode: "onChange",
  });
  const deliveryMethod = watch("delivery");
  const deliveryAddress = watch("deliveryAddress");

  const onSubmit = handleSubmit((data) => {
    if (isValid) {
      dispatch(setFormData(data));
      dispatch(setFormState("confirmOrder"));
    }
  });

  const getLabProps = (fieldValue: string) => {
    const valueProps = deliveryLabsData.find(
      (item) => item.value === fieldValue,
    );
    return valueProps ?? {};
  };

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
              id="middleName"
              onClear={resetField}
              placeholder="Отчество"
              {...register("middleName")}
            />
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <SelectButton
                  items={genderData}
                  selected={field.value}
                  setSelected={(value) => {
                    field.onChange(value);
                  }}
                  trigger={
                    <Button
                      bg="white"
                      border="none"
                      borderBottom="3px solid #048B78"
                      borderRadius={8}
                      color={field.value ? "black" : "lab_grey.200"}
                      fontWeight="semibold"
                      justifyContent="space-between"
                      width="100%"
                    >
                      {field.value
                        ? genderData.find((item) => item.value === field.value)
                            ?.label
                        : "Пол"}
                      <CollapsibleIcon width="12px" />
                    </Button>
                  }
                />
              )}
            />
            <DatePicker id="date" {...register("date")} />
            <Controller
              control={control}
              name="delivery"
              render={({ field }) => (
                <SelectButton
                  items={deliveryData}
                  selected={field.value}
                  setSelected={(value) => {
                    field.onChange(value);
                  }}
                  trigger={
                    <Button
                      bg="white"
                      border="none"
                      borderBottom="3px solid #048B78"
                      borderRadius={8}
                      color={field.value ? "black" : "lab_grey.200"}
                      fontWeight="semibold"
                      justifyContent="space-between"
                      width="100%"
                    >
                      {field.value
                        ? deliveryData.find(
                            (item) => item.value === field.value,
                          )?.label
                        : "Доставка биоматериала"}
                      <CollapsibleIcon width="12px" />
                    </Button>
                  }
                />
              )}
            />
            {deliveryMethod === "personal" && (
              <div>
                <Controller
                  control={control}
                  name="labAdressId"
                  render={({ field }) => (
                    <SelectButton
                      ContentElement={LabContent}
                      items={deliveryLabsData}
                      selected={field.value}
                      setSelected={(value) => {
                        field.onChange(value);
                      }}
                      trigger={
                        <Button
                          bg="white"
                          border="none"
                          borderBottom="3px solid #048B78"
                          borderRadius={8}
                          color={field.value ? "black" : "lab_grey.200"}
                          fontWeight="semibold"
                          height="auto"
                          justifyContent="space-between"
                          padding="5px 10px"
                          width="100%"
                        >
                          {field.value ? (
                            <LabContent {...getLabProps(field.value)} />
                          ) : (
                            "Адрес пункта обработки"
                          )}
                          <CollapsibleIcon width="12px" />
                        </Button>
                      }
                    />
                  )}
                />
                <Text color="lab_red.error" mt={2} textStyle="xs">
                  {errors.labAdressId?.message}
                </Text>
              </div>
            )}
            {deliveryMethod === "courier" && (
              <div>
                <Button
                  bg="white"
                  border="none"
                  borderBottom="3px solid #048B78"
                  borderRadius={8}
                  color={deliveryAddress?.street ? "black" : "lab_grey.200"}
                  fontWeight="semibold"
                  justifyContent="space-between"
                  onClick={() => {
                    bottomSheetModal.open("address_form", {
                      modalData: {
                        onFormSubmit: (formData: AddressFormInputs) => {
                          setValue("deliveryAddress", formData);
                          trigger();
                        },
                      },
                      title: "Выберите адрес доставки",
                      type: "ADDRESS_FORM",
                    });
                  }}
                  truncate
                  width="100%"
                >
                  <Text truncate>
                    {deliveryAddress?.street
                      ? `${deliveryAddress.city}, ${deliveryAddress.street}, ${deliveryAddress.building}, ${deliveryAddress.apartment}`
                      : "Добавить адрес доставки"}
                  </Text>
                </Button>
                <Text color="lab_red.error" mt={2} textStyle="xs">
                  {errors.deliveryAddress?.message}
                </Text>
              </div>
            )}
          </Stack>
          <Button disabled={!isDirty} type="submit" w="100%">
            Продолжить
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
