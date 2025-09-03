import type { ReactElement } from "react";

import { Container, Flex, Heading, Table, Text } from "@chakra-ui/react";

import "./info-card.module.scss";

type InfoCard = {
  items: {
    data: string;
    title: string;
  }[];
  title: string;
  bottomElement?: ReactElement;
};

export const InfoCard = ({ bottomElement, items, title }: InfoCard) => (
  <Container
    bg="lab_red.50"
    boxShadow="0px 0px 14px 0px #00000040"
    p="14px 2px"
  >
    <Flex justifyContent="space-between" p="0 14px">
      <Heading color="lab_red.500" size="md">
        {title}
      </Heading>
      <Text fontWeight="normal">Change</Text>
    </Flex>
    <Table.Root bg="transparent">
      <Table.Body>
        {items.map((item) => (
          <Table.Row bg="transparent" key={item.title}>
            <Table.Cell borderBottom="1px solid #CBCBCB" minW="127px">
              <Text fontWeight="medium" textStyle="md">
                {item.title}
              </Text>
            </Table.Cell>
            <Table.Cell borderBottom="1px solid #CBCBCB">
              <Text color="lab_red.500" fontWeight="medium" textStyle="md">
                {item.data}
              </Text>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    {bottomElement}
  </Container>
);
