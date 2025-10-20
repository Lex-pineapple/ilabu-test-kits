import type { UseFormResetField } from "react-hook-form";

import {
  CloseButton,
  Input,
  InputGroup,
  type InputProps,
} from "@chakra-ui/react";

import type { Inputs } from "#/views/checkout-form/components/order-details/order-details";
import { InputError } from "#shared/input-error";

type InputClearableProps = {
  id: "email" | "firstName" | "lastName" | "middleName";
  onClear: UseFormResetField<Inputs>;
  errorMessage?: string;
} & InputProps;

export const InputClearable = ({
  errorMessage,
  id,
  onClear,
  ...props
}: InputClearableProps) => {
  const endElement = (
    <CloseButton
      color="lab_green.900"
      me="-2"
      onClick={() => {
        onClear(id);
      }}
      size="xs"
    />
  );

  return (
    <div>
      <InputGroup endElement={endElement}>
        <Input _placeholder={{ textAlign: "start" }} id={id} {...props} />
      </InputGroup>
      <InputError message={errorMessage} />
    </div>
  );
};
