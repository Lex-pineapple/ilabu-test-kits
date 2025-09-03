import { type ListCollection, Portal, Select } from "@chakra-ui/react";

import styles from "./select-input.module.scss";

type SelectInputProps = {
  items: ListCollection<SelectItem>;
  placeholder: string;
};

type SelectItem = {
  label: string;
  value: string;
};

export const Selectinput = ({ items, placeholder }: SelectInputProps) => (
  <Select.Root collection={items} variant="colored">
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
            <Select.Item className={styles.item} item={item} key={item.value}>
              {item.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Portal>
  </Select.Root>
);
