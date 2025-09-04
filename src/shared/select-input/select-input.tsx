import { type Control, Controller } from "react-hook-form";

import { type ListCollection, Portal, Select } from "@chakra-ui/react";

import type { Inputs } from "#/views/checkout-form/components/order-details/order-details";

import styles from "./select-input.module.scss";

type SelectInputProps = {
  control: Control<Inputs, unknown, Inputs>;
  id: "delivery" | "gender";
  items: ListCollection<SelectItem>;
  placeholder: string;
};

type SelectItem = {
  label: string;
  value: string;
};

export const Selectinput = ({
  control,
  id,
  items,
  placeholder,
}: SelectInputProps) => (
  <Controller
    control={control}
    name={id}
    render={({ field }) => (
      <Select.Root
        collection={items}
        name={field.name}
        onInteractOutside={() => field.onBlur()}
        onValueChange={({ value }) => field.onChange(value)}
        value={field.value}
        variant="colored"
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={placeholder} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {items.items.map((item) => (
                <Select.Item
                  className={styles.item}
                  item={item}
                  key={item.value}
                >
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    )}
  />
);
