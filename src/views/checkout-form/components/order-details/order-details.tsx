import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { validationSchema } from "#constants/form-validation-schema";
import { deliveryData, genderData } from "#constants/general";
import { DatePicker } from "#shared/date-picker";
import { InputClearable } from "#shared/input-clearable";
import { Selectinput } from "#shared/select-input";
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
      <Container mb={5} p="0 14px">
        <Heading mb={3.5} size="2xl" textTransform="uppercase">
          order details
        </Heading>
        <Text textStyle="xl">
          Fill in your details to complete your{" "}
          <Text as="span" color="lab_red.500" display="inline">
            order
          </Text>
          .
        </Text>
      </Container>
      <Flex flexDir="column" h="100%" justifyContent="space-between">
        <form onSubmit={onSubmit}>
          <Stack gap={5} pb={8}>
            <InputClearable
              id="email"
              onClear={resetField}
              placeholder="Your Email"
              {...register("email")}
            />
            <InputClearable
              id="firstName"
              onClear={resetField}
              placeholder="First Name"
              {...register("firstName")}
            />
            <InputClearable
              id="lastName"
              onClear={resetField}
              placeholder="Last name"
              {...register("lastName")}
            />
            <Selectinput
              control={control}
              id="gender"
              items={genderData}
              placeholder="Gender"
            />
            <DatePicker id="date" {...register("date")} />
            <Selectinput
              control={control}
              id="delivery"
              items={deliveryData}
              placeholder="Delivery of biomaterials"
            />
          </Stack>
          <Button
            disabled={!isDirty || !isValid}
            textTransform="uppercase"
            type="submit"
            w="100%"
          >
            PAY
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
