import { useEffect, useState } from "react";
import cn from "classnames";

import { Input, InputGroup, type InputProps } from "@chakra-ui/react";

import styles from "./date-picker.module.scss";

export const DatePicker = (props: InputProps) => {
  const [inputActive, setInputActive] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setInputActive(Boolean(value));
  }, [value]);

  return (
    <InputGroup>
      <Input
        className={cn(styles.date_input, {
          [styles["date_input--active"]]: inputActive,
        })}
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange?.(e);
        }}
        onInput={(e) => {
          setValue((e.target as HTMLInputElement).value);
          props.onInput?.(e);
        }}
        placeholder="Дата рождения"
        type="date"
        {...props}
      />
    </InputGroup>
  );
};
