import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
} from "@chakra-ui/react";

import { DrawerSwipeable } from "#/components/drawer-swipeable";
import { ListControlled } from "#/components/list-controlled";
import type { SortTypes } from "#/components/list-controlled/list-controlled";
import { toaster } from "#/components/toaster/toaster-use";
import { CollapsibleIcon } from "#assets/icons/collapsible-icon";
import { SortAlphabeticalDown } from "#assets/icons/sort-alphabetical-down";
import { SortAlphabeticalUp } from "#assets/icons/sort-alphabetical-up";
import { SortIcon } from "#assets/icons/sort-icon";
import { SortPriceDown } from "#assets/icons/sort-price-down";
import { SortPriceUp } from "#assets/icons/sort-price-up";
import type { CardExtensiveDataType } from "#constants/card-extensive-data";
import { SelectButton } from "#shared/select-button";
import type { ListType } from "#shared/select-button/select-button";
import { useAppSelector } from "#store/hooks";
import { getCartItems } from "#store/slices/cart-slice";

const sortKeys = [
  {
    icon: <SortAlphabeticalUp size="lg" />,
    label: "В алфавитном порядке",
    value: "nameAsc",
  },
  {
    icon: <SortAlphabeticalDown size="lg" />,
    label: "В обратном алфавитном порядке",
    value: "nameDesc",
  },
  {
    icon: <SortPriceUp />,
    label: "По убыванию цены",
    value: "priceDesc",
  },
  {
    icon: <SortPriceDown />,
    label: "По возрастанию цены",
    value: "priceAsc",
  },
];

export const SelectedKit = () => {
  const loaderData = useLoaderData<CardExtensiveDataType>();
  const selected = useAppSelector(getCartItems);

  const [searchQ, setSearchQ] = useState("");
  const [sortType, setSortType] = useState<null | string>(null);
  const [execLab, setExecLab] = useState<null | string>(
    selected.length ? selected[0].execLab.uid : null,
  );
  const execLabList = loaderData.analysisItems
    .map((item) => ({
      label: item.execLab.name,
      value: item.execLab.uid,
    }))
    .reduce((acc, curr) => {
      if (acc.some((item) => item.value === curr.value)) return acc;
      return [...acc, curr];
    }, [] as ListType[]);

  useEffect(() => {
    if (selected.length) setExecLab(selected[0].execLab.uid);
  }, [selected]);

  return (
    <Container p={0} pb={14} pt={10}>
      <Heading pb={2} size="md" textTransform="uppercase">
        {loaderData.title}
      </Heading>
      <Container p={0}>
        <Flex justify="space-between" pb={2.5}>
          <InputGroup maxW={170}>
            <Input
              bg="white"
              border="none"
              borderRadius={15}
              boxShadow="0 0 10px 2px #0000000f"
              onInput={(e) => setSearchQ((e.target as HTMLInputElement).value)}
              placeholder="Найти тест"
              textStyle="sm"
              value={searchQ}
              variant="secondary"
            />
          </InputGroup>
          <SelectButton
            items={sortKeys}
            selected={sortType}
            setSelected={setSortType}
            trigger={
              <Button bg="lab_green.900" border="none" p={0} variant="outline">
                {sortType ? (
                  sortKeys.find((item) => item.value === sortType)?.icon
                ) : (
                  <SortIcon color="#fff" size="lg" />
                )}
              </Button>
            }
          />
        </Flex>
        <SelectButton
          items={execLabList}
          selected={execLab}
          setSelected={setExecLab}
          trigger={
            <Button
              bg="white"
              border="none"
              borderRadius={15}
              boxShadow="0 0 10px 2px #0000000f"
              color="black"
              height="auto"
              justifyContent="space-between"
              mb={11}
              onClick={(e) => {
                if (selected.length > 0) {
                  e.preventDefault();
                  toaster.create({
                    closable: true,
                    description:
                      "Можно выбрать только одного исполнителя. Для выбора другого исполнителя, пожалуйста, очистите элементы из корзины",
                    type: "error",
                  });
                }
              }}
              p={2.5}
              textAlign="left"
              whiteSpace="break-spaces"
              width="100%"
            >
              {execLab
                ? execLabList.find((item) => item.value === execLab)?.label
                : "Выбрать исполнителя"}
              <CollapsibleIcon size="sm" />
            </Button>
          }
        />
        <ListControlled
          color={loaderData.color}
          items={loaderData.analysisItems}
          labId={execLab}
          searchQ={searchQ}
          sortType={sortType as SortTypes}
        />
      </Container>
      <DrawerSwipeable />
    </Container>
  );
};
