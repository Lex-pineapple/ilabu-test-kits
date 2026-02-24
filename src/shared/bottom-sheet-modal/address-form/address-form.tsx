import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";

import {
  Button,
  Container,
  Field,
  Flex,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

import { validationSchema } from "#shared/bottom-sheet-modal/address-form/validation-schema";
import {
  FloatingLabelInput,
  FloatingLabelTextarea,
} from "#shared/floating-label-input";
import { InputError } from "#shared/input-error";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import {
  getDeliveryAddress,
  setDeliveryAddress,
} from "#store/slices/form-slice";

export type AddressFormInputs = {
  apartment: string;
  building: string;
  city: string;
  phone: string;
  street: string;
  commentary?: string;
  entryway?: string;
  floor?: string;
};

type AddressFormProps = {
  onClose: () => void;
  onFormSubmit: (values: AddressFormInputs) => void;
};

export const AddressForm = ({ onClose, onFormSubmit }: AddressFormProps) => {
  const addressFromStore = useAppSelector(getDeliveryAddress);
  const dispatch = useAppDispatch();
  const {
    control,
    formState: { errors, isDirty, isValid },
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm<AddressFormInputs>({
    defaultValues: addressFromStore,
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const registerWithMask = useHookFormMask(register);

  useEffect(() => {
    reset(addressFromStore);
  }, [addressFromStore, reset]);

  const onSubmit = handleSubmit((data) => {
    if (isValid) {
      dispatch(setDeliveryAddress(data));
      onFormSubmit(data);
      onClose();
    }
  });

  const formHasValues = () => {
    const values = getValues();
    return Object.values(values).some((value) => value?.trim());
  };

  return (
    <Container p={0} pt={5}>
      <Stack asChild gap={8}>
        <form onSubmit={onSubmit}>
          <Stack gap={2.5}>
            <Field.Root>
              <Controller
                control={control}
                name="city"
                render={({ field }) => (
                  <FloatingLabelInput id="city" label="Город" {...field} />
                )}
              />
              <InputError message={errors.city?.message} />
            </Field.Root>
            <Field.Root pt={2}>
              <Controller
                control={control}
                name="street"
                render={({ field }) => (
                  <FloatingLabelInput id="street" label="Улица" {...field} />
                )}
              />
              <InputError message={errors.street?.message} />
            </Field.Root>
            <Flex gap={2} pt={2}>
              <Field.Root>
                <Controller
                  control={control}
                  name="building"
                  render={({ field }) => (
                    <FloatingLabelInput
                      id="building"
                      label="Дом/Корпус"
                      {...field}
                    />
                  )}
                />
                <InputError message={errors.building?.message} />
              </Field.Root>
              <Field.Root>
                <Controller
                  control={control}
                  name="apartment"
                  render={({ field }) => (
                    <FloatingLabelInput
                      id="apartment"
                      label="Квартира"
                      {...field}
                    />
                  )}
                />
                <InputError message={errors.apartment?.message} />
              </Field.Root>
            </Flex>
            <Flex gap={2} pt={2}>
              <Field.Root>
                <Controller
                  control={control}
                  name="floor"
                  render={({ field }) => (
                    <FloatingLabelInput id="floor" label="Этаж" {...field} />
                  )}
                />
                <InputError message={errors.floor?.message} />
              </Field.Root>
              <Field.Root>
                <Controller
                  control={control}
                  name="entryway"
                  render={({ field }) => (
                    <FloatingLabelInput
                      id="entryway"
                      label="Подъезд"
                      {...field}
                    />
                  )}
                />
                <InputError message={errors.entryway?.message} />
              </Field.Root>
            </Flex>
            <Field.Root>
              <InputGroup startElement="+">
                <Input
                  id="phone"
                  placeholder="Телефон"
                  {...registerWithMask("phone", ["(375) 99 999-99-99"], {
                    required: true,
                  })}
                />
              </InputGroup>
              <InputError message={errors.phone?.message} />
            </Field.Root>
            <Field.Root pt={2}>
              <Controller
                control={control}
                name="commentary"
                render={({ field }) => (
                  <FloatingLabelTextarea
                    autoresize
                    id="commentary"
                    label="Комментарий для курьера"
                    maxH="10lh"
                    {...field}
                  />
                )}
              />
            </Field.Root>
          </Stack>
          <Flex justifyContent="space-between">
            <Text fontWeight="semibold">Курьерская доставка Mylab</Text>
            <Text color="lab_green.900" fontWeight="semibold">
              33.00 BYN
            </Text>
          </Flex>
          <Button
            disabled={!isDirty && !formHasValues()}
            textTransform="uppercase"
            type="submit"
            w="100%"
          >
            Продолжить
          </Button>
        </form>
      </Stack>
    </Container>
  );
};
