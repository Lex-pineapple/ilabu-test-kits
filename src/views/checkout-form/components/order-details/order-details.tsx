import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button, Flex, Stack, Text } from "@chakra-ui/react";

import { LabContent } from "#/views/checkout-form/components/order-details/components/lab-content";
import { useOrderDetails } from "#/views/checkout-form/components/order-details/use-order-retails";
import { CollapsibleIcon } from "#assets/icons/collapsible-icon";
import { validationSchema } from "#constants/form-validation-schema";
import { deliveryData, genderData } from "#constants/general";
import { bottomSheetModal } from "#shared/bottom-sheet-modal";
import type { AddressFormInputs } from "#shared/bottom-sheet-modal/address-form/address-form";
import { DatePicker } from "#shared/date-picker";
import { InputClearable } from "#shared/input-clearable";
import { InputError } from "#shared/input-error";
import { SelectButton } from "#shared/select-button";
import { TitleCard } from "#shared/title-card";
import { useGetLabsAddressesQuery } from "#store/api/labs-api";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { getCurrLabId } from "#store/slices/cart-slice";
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

export const OrderDetails = () => {
  const { isLoading, submitOrderDetails } = useOrderDetails();
  const formData = useAppSelector(getFormData);
  const currLabId = useAppSelector(getCurrLabId);
  const { data: labsList } = useGetLabsAddressesQuery(currLabId);
  const {
    control,
    formState: { errors, isValid },
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
      submitOrderDetails(data);
    }
  });

  const getLabProps = (fieldValue: string) => {
    const valueProps = labsList?.find((item) => item.value === fieldValue);
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
              errorMessage={errors.email?.message}
              id="email"
              onClear={resetField}
              placeholder="Email"
              {...register("email")}
            />
            <InputClearable
              errorMessage={errors.firstName?.message}
              id="firstName"
              onClear={resetField}
              placeholder="Имя"
              {...register("firstName")}
            />
            <InputClearable
              errorMessage={errors.lastName?.message}
              id="lastName"
              onClear={resetField}
              placeholder="Фамилия"
              {...register("lastName")}
            />
            <InputClearable
              errorMessage={errors.middleName?.message}
              id="middleName"
              onClear={resetField}
              placeholder="Отчество"
              {...register("middleName")}
            />
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <div>
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
                          ? genderData.find(
                              (item) => item.value === field.value,
                            )?.label
                          : "Пол"}
                        <CollapsibleIcon width="12px" />
                      </Button>
                    }
                  />
                  <InputError message={errors.gender?.message} />
                </div>
              )}
            />
            <DatePicker
              errorMessage={errors.date?.message}
              id="date"
              {...register("date")}
            />
            <Controller
              control={control}
              name="delivery"
              render={({ field }) => (
                <div>
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
                  <InputError message={errors.delivery?.message} />
                </div>
              )}
            />
            {deliveryMethod === "personal" && labsList && (
              <div>
                <Controller
                  control={control}
                  name="labAdressId"
                  render={({ field }) => (
                    <SelectButton
                      ContentElement={LabContent}
                      items={labsList}
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
                <InputError message={errors.labAdressId?.message} />
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
                <InputError message={errors.deliveryAddress?.message} />
              </div>
            )}
          </Stack>
          <Button
            loading={isLoading}
            loadingText="Отправляем..."
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
