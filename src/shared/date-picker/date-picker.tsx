import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { Input, InputGroup } from "@chakra-ui/react";

import { CalendarIcon } from "#assets/icons/calendar-icon";

import styles from "./date-picker.module.scss";

export const DatePicker = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputActive, setInputActive] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setInputActive(Boolean(value));
  }, [value]);

  return (
    <InputGroup
      endElement={
        <CalendarIcon
          onClick={() => (inputRef.current as HTMLInputElement).showPicker()}
          size="lg"
        />
      }
    >
      <Input
        className={cn(styles.date_input, {
          [styles["date_input--active"]]: inputActive,
        })}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Date of birth"
        ref={inputRef}
        type="date"
        value={value}
      />
    </InputGroup>
  );
};
