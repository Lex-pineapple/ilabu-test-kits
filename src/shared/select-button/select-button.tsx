import { type ListCollection, Portal, Select, Text } from "@chakra-ui/react";

import { SelectTrigger } from "#shared/select-button/components/select-trigger";

export type ListType = { label: string; value: string };

type SelectButtonTypes = {
  items: ListCollection<ListType>;
  selected: string[];
  setSelected: (value: string[]) => void;
};

export const SelectButton = ({
  items,
  selected,
  setSelected,
}: SelectButtonTypes) => (
  <Select.Root
    alignItems="flex-end"
    collection={items}
    defaultValue={["react"]}
    onValueChange={(e) => setSelected(e.value)}
    positioning={{ sameWidth: false }}
    size="sm"
    value={selected}
  >
    <Select.HiddenSelect />
    <Select.Control>
      <SelectTrigger />
    </Select.Control>
    <Portal>
      <Select.Positioner>
        <Select.Content minW="32">
          {items.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              <Text>{item.label}</Text>
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Portal>
  </Select.Root>
);
