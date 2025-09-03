import { useRef, useState } from "react";

import {
  CloseButton,
  Input,
  InputGroup,
  type InputProps,
} from "@chakra-ui/react";

export const InputClearable = (props: InputProps) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = value ? (
    <CloseButton
      color="lab_red.500"
      me="-2"
      onClick={() => {
        setValue("");
        inputRef.current?.focus();
      }}
      size="xs"
    />
  ) : undefined;

  return (
    <InputGroup endElement={endElement}>
      <Input
        _placeholder={{ textAlign: "start" }}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        ref={inputRef}
        value={value}
        {...props}
      />
    </InputGroup>
  );
};
