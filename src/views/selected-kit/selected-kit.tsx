import { useState } from "react";
import { useLoaderData } from "react-router";

import {
  Container,
  createListCollection,
  Flex,
  Input,
  InputGroup,
} from "@chakra-ui/react";

import { ListControlled } from "#/components/list-controlled";
import { SearchIcon } from "#assets/icons/search-icon";
import type { CardProductDataType } from "#constants/card-product-data";
import { HeaderWBg } from "#shared/header-w-bg";
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
  const loaderData = useLoaderData<CardProductDataType>();
  const [searchQ, setSearchQ] = useState("");
  const [sortType, setSortType] = useState<string[]>([]);

  return (
    <div>
      <HeaderWBg>{loaderData.title}</HeaderWBg>
      <Container p="18px 14px">
        <Flex justify="space-between" pb={6}>
          <InputGroup maxW={170} startElement={<SearchIcon size="md" />}>
            <Input
              onInput={(e) => setSearchQ((e.target as HTMLInputElement).value)}
              placeholder="Search test"
              value={searchQ}
              variant="secondary"
            />
          </InputGroup>
          <SelectButton
            items={sortKeys}
            selected={sortType}
            setSelected={setSortType}
          />
        </Flex>
        <ListControlled
          color={loaderData.color}
          items={loaderData.items}
          searchQ={searchQ}
          sortType={sortType[0]}
        />
      </Container>
    </div>
  );
};
