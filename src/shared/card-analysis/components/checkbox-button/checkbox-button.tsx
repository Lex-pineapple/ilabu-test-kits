import { Checkbox, type CheckboxRootProps } from "@chakra-ui/react";

import { CheckmarkIcon } from "#assets/icons/checkmark-icon";
import { PlusIcon } from "#assets/icons/plus-icon";

export const CheckboxButton = (props: CheckboxRootProps) => (
  <Checkbox.Root {...props} size="lg">
    <Checkbox.HiddenInput />
    <Checkbox.Control
      _checked={{
        bg: "lab_green.900",
      }}
      borderColor="lab_green.900"
      borderRadius={10}
      h={14}
      p={3}
      w={14}
    >
      {props.checked ? <CheckmarkIcon /> : <PlusIcon />}
    </Checkbox.Control>
  </Checkbox.Root>
);
