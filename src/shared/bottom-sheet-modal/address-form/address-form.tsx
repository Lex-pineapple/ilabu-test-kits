import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";

import {
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { validationSchema } from "#shared/bottom-sheet-modal/address-form/validation-schema";
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
    <Container p={0}>
      <Stack asChild gap={8}>
        <form onSubmit={onSubmit}>
          <Stack gap={2.5}>
            <div>
              <Input id="city" placeholder="Город" {...register("city")} />
              <InputError message={errors.city?.message} />
            </div>
            <div>
              <Input id="street" placeholder="Улица" {...register("street")} />
              <InputError message={errors.street?.message} />
            </div>
            <Flex gap={2}>
              <div>
                <Input
                  id="building"
                  placeholder="Дом/Корпус"
                  {...register("building")}
                />
                <InputError message={errors.building?.message} />
              </div>
              <div>
                <Input
                  id="apartment"
                  placeholder="Квартира"
                  {...register("apartment")}
                />
                <InputError message={errors.apartment?.message} />
              </div>
            </Flex>
            <Flex gap={2}>
              <div>
                <Input id="floor" placeholder="Этаж" {...register("floor")} />
                <InputError message={errors.floor?.message} />
              </div>
              <div>
                <Input
                  id="entryway"
                  placeholder="Подъезд"
                  {...register("entryway")}
                />
                <InputError message={errors.entryway?.message} />
              </div>
            </Flex>
            <div>
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
            </div>
            <Textarea
              autoresize
              id="commentary"
              maxH="10lh"
              placeholder="Комментарий для курьера"
              {...register("commentary")}
            />
          </Stack>
          <Flex justifyContent="space-between">
            <Text fontWeight="semibold">Курьерская доставка Mylab</Text>
            <Text color="lab_green.900" fontWeight="semibold">
              33.00 BYN
            </Text>
          </Flex>
          <Button
            disabled={!isDirty && !formHasValues()}
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
