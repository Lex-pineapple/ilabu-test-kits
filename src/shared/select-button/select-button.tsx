import type { JSX, ReactNode } from "react";

import { RadioGroup, Stack } from "@chakra-ui/react";

import { BottomSheet } from "#shared/bottom-sheet";

export type ListType = { value: string; icon?: JSX.Element; label?: string };

type SelectButtonTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[] | ListType[];
  setSelected: (value: null | string) => void;
  selected?: null | string;
  trigger?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ContentElement?: (props: any) => JSX.Element;
};

export const SelectButton = ({
  ContentElement,
  items,
  selected,
  setSelected,
  trigger,
}: SelectButtonTypes) => (
  <BottomSheet
    primaryButton={"Применить"}
    title={"Сортировка"}
    trigger={trigger}
  >
    <RadioGroup.Root
      onValueChange={(e) => setSelected(e.value)}
      pb={7}
      value={selected}
      variant="outline"
    >
      <Stack gap={2.5}>
        {items.map((item) => (
          <RadioGroup.Item
            colorPalette="teal"
            justifyContent="space-between"
            key={item.value}
            value={item.value}
          >
            <RadioGroup.ItemHiddenInput />
            {ContentElement && <ContentElement {...item} />}
            {item.label && (
              <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            )}
            <RadioGroup.ItemIndicator />
          </RadioGroup.Item>
        ))}
      </Stack>
    </RadioGroup.Root>
  </BottomSheet>
);
