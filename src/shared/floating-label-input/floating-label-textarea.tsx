import { useState } from "react";

import {
  Box,
  defineStyle,
  Field,
  Textarea,
  type TextareaProps,
  useControllableState,
} from "@chakra-ui/react";

const floatingStyles = defineStyle({
  "&[data-float]": {
    bg: "lab_green.50",
    borderRadius: "10px",
    color: "lab_green.900",
    insetStart: "2",
    p: "0 10px",
    top: "-3",
  },
  bg: "bg",
  color: "lab_grey.200",
  fontSize: "14px",
  fontWeight: 600,
  insetStart: "3",
  pointerEvents: "none",
  pos: "absolute",
  px: "0.5",
  top: "2.5",
  transition: "position",
});

interface FloatingLabelTextareaProps extends TextareaProps {
  label: React.ReactNode;
  defaultValue?: number | readonly string[] | string;
  onValueChange?:
    | ((value: number | readonly string[] | string) => void)
    | undefined;
  value?: number | readonly string[] | string;
}

export const FloatingLabelTextarea = (props: FloatingLabelTextareaProps) => {
  const { defaultValue = "", label, onValueChange, value, ...rest } = props;

  const [inputState, setInputState] = useControllableState<
    number | readonly string[] | string
  >({
    defaultValue,
    onChange: onValueChange,
    value,
  });

  const [focused, setFocused] = useState(false);
  const shouldFloat =
    (typeof inputState !== "number" && inputState.length > 0) || focused;

  return (
    <Box pos="relative" w="full">
      <Textarea
        {...rest}
        data-float={shouldFloat || undefined}
        onBlur={(e) => {
          props.onBlur?.(e);
          setFocused(false);
        }}
        onChange={(e) => {
          props.onChange?.(e);
          setInputState(e.target.value);
        }}
        onFocus={(e) => {
          props.onFocus?.(e);
          setFocused(true);
        }}
        value={inputState}
      />
      <Field.Label css={floatingStyles} data-float={shouldFloat || undefined}>
        {label}
      </Field.Label>
    </Box>
  );
};
