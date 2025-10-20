import type { ReactElement } from "react";

import { Button, Flex, Heading, Table, Text } from "@chakra-ui/react";

import { EditIcon } from "#assets/icons/edit-icon";
import { ShdContainer } from "#shared/shd-container";

import "./info-card.module.scss";

type InfoCard = {
  items: {
    data?: string;
    title?: string;
  }[];
  title: string;
  onOrderChange: () => void;
  bottomElement?: ReactElement;
  breakWord?: string;
  whiteSpace?: string;
};

export const InfoCard = ({
  bottomElement,
  breakWord,
  items,
  onOrderChange,
  title,
  whiteSpace,
}: InfoCard) => (
  <ShdContainer p={5}>
    <Flex justifyContent="space-between">
      <Heading size="md" textTransform="uppercase">
        {title}
      </Heading>
      <Button
        fontWeight="normal"
        h="fit-content"
        onClick={onOrderChange}
        p={1}
        variant="ghost"
      >
        <EditIcon />
      </Button>
    </Flex>
    <Table.Root bg="transparent">
      <Table.Body>
        {items.map((item) => (
          <Table.Row bg="transparent" key={item.title}>
            <Table.Cell
              borderBottom="1px solid #CBCBCB"
              maxW={250}
              minW="127px"
              pl={0}
            >
              <Text fontWeight="medium" textStyle="sm">
                {item.title}
              </Text>
            </Table.Cell>
            <Table.Cell borderBottom="1px solid #CBCBCB" pr={0}>
              <Text
                color="lab_green.900"
                fontWeight="medium"
                textAlign="end"
                textStyle="sm"
                whiteSpace={whiteSpace}
                wordBreak={breakWord}
              >
                {item.data}
              </Text>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    {bottomElement}
  </ShdContainer>
);
