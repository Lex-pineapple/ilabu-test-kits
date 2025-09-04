import type { UseFormResetField } from "react-hook-form";

import {
  CloseButton,
  Input,
  InputGroup,
  type InputProps,
} from "@chakra-ui/react";

import type { Inputs } from "#/views/checkout-form/components/order-details/order-details";

type InputClearableProps = {
  id: "email" | "firstName" | "lastName";
  onClear: UseFormResetField<Inputs>;
} & InputProps;

export const InputClearable = ({
  id,
  onClear,
  ...props
}: InputClearableProps) => {
  const endElement = (
    <CloseButton
      color="lab_red.500"
      me="-2"
      onClick={() => {
        onClear(id);
      }}
      size="xs"
    />
  );

  return (
    <InputGroup endElement={endElement}>
      <Input _placeholder={{ textAlign: "start" }} id={id} {...props} />
    </InputGroup>
  );
};
