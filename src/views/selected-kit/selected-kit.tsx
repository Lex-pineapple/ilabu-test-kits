import { useState } from "react";
import { useLoaderData } from "react-router";

import {
  Container,
  createListCollection,
  Flex,
  Heading,
  Input,
  InputGroup,
} from "@chakra-ui/react";

import { DrawerSwipeable } from "#/components/drawer-swipeable";
import { ListControlled } from "#/components/list-controlled";
import type { CardExtensiveDataType } from "#constants/card-extensive-data";
import { SelectButton } from "#shared/select-button";

const sortKeys = createListCollection({
  items: [
    {
      label: "Ascending",
      value: "asc",
    },
    {
      label: "Descending",
      value: "desc",
    },
  ],
});

export const SelectedKit = () => {
  const loaderData = useLoaderData<CardExtensiveDataType>();

  const [searchQ, setSearchQ] = useState("");
  const [sortType, setSortType] = useState<string[]>([]);

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
          {/* TODO: update switching logic and add bottom sheet */}
          <SelectButton
            items={sortKeys}
            selected={sortType}
            setSelected={setSortType}
          />
        </Flex>
        {/* TODO: add logic */}
        <Input
          bg="white"
          border="none"
          borderRadius={15}
          boxShadow="0 0 10px 2px #0000000f"
          mb={11}
          placeholder="Выбрать исполнителя"
          textStyle="sm"
          value={searchQ}
          variant="secondary"
        />
        <ListControlled
          color={loaderData.color}
          items={loaderData.analysisItems}
          searchQ={searchQ}
          sortType={sortType[0]}
        />
      </Container>
      <DrawerSwipeable />
    </Container>
  );
};
