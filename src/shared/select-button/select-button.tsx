import type { JSX } from "react";

import { Button, RadioGroup, Stack } from "@chakra-ui/react";

import { toaster } from "#/components/toaster/toaster-use";
import { SortIcon } from "#assets/icons/sort-icon";
import { BottomSheet } from "#shared/bottom-sheet";

export type ListType = { label: string; value: string; icon?: JSX.Element };

type SelectButtonTypes = {
  items: ListType[];
  selected: null | string;
  setSelected: (value: null | string) => void;
  buttonText?: string;
  disabled?: boolean;
};

export const SelectButton = ({
  buttonText,
  disabled,
  items,
  selected,
  setSelected,
}: SelectButtonTypes) => (
  <BottomSheet
    primaryButton={"Применить"}
    title={"Сортировка"}
    trigger={
      buttonText ? (
        <Button
          bg="white"
          border="none"
          borderRadius={15}
          boxShadow="0 0 10px 2px #0000000f"
          color="black"
          justifyContent="flex-start"
          mb={11}
          onClick={(e) => {
            if (disabled) {
              e.preventDefault();
              toaster.create({
                closable: true,
                description:
                  "Можно выбрать только одного исполнителя. Для выбора другого исполнителя, пожалуйста, очистите элементы из корзины",
                type: "error",
              });
            }
          }}
          p="20px 10px"
          textAlign="left"
          whiteSpace="break-spaces"
          width="100%"
        >
          {selected
            ? items.find((item) => item.value === selected)?.label
            : buttonText}
        </Button>
      ) : (
        <Button bg="lab_green.900" border="none" p={0} variant="outline">
          {selected ? (
            items.find((item) => item.value === selected)?.icon
          ) : (
            <SortIcon color="#fff" size="lg" />
          )}
        </Button>
      )
    }
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
            <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            <RadioGroup.ItemIndicator />
          </RadioGroup.Item>
        ))}
      </Stack>
    </RadioGroup.Root>
  </BottomSheet>
);
