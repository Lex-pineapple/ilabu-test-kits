import { Container, Flex, Heading, Table, Text } from "@chakra-ui/react";

import { TUBE_COLORS } from "#constants/general";
import { ShdContainer } from "#shared/shd-container";

type TestTubeVisualItemType = {
  cap_color: string;
  code: string;
};

type TestTubeVisualProps = {
  items: TestTubeVisualItemType[];
};

export const TestTubeVisual = ({ items }: TestTubeVisualProps) => (
  <ShdContainer p={4.5}>
    <Heading fontWeight="bold" pb={3.5} size="md" textTransform="uppercase">
      Пробирки/контейнеры, необходимые для выполнения выбранных вами тестов:
    </Heading>
    <Table.Root bg="transparent">
      <Table.Header>
        <Table.Row bg="transparent">
          <Table.ColumnHeader
            border="none"
            fontWeight="medium"
            p={0}
            pb={1.5}
            textStyle="sm"
          >
            Цвет крышки
          </Table.ColumnHeader>
          <Table.ColumnHeader
            border="none"
            fontWeight="medium"
            p={0}
            pb={1.5}
            textStyle="sm"
          >
            Код
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row bg="transparent" key={item.cap_color}>
            <Table.Cell border="none" pl={0} w={124}>
              <Container
                bg={TUBE_COLORS[item.cap_color].fill}
                borderRadius={10}
                boxShadow="0 0 8px 3px #a6a3a3"
                h="24px"
                m={0}
                p={0}
                w="124px"
              >
                <Text
                  color={TUBE_COLORS[item.cap_color].contrast}
                  fontStyle="italic"
                  fontWeight={600}
                  textAlign="center"
                >
                  {TUBE_COLORS[item.cap_color].name}
                </Text>
              </Container>
            </Table.Cell>
            <Table.Cell border="none" pl={0}>
              <ShdContainer>
                <Flex justifyContent="center" p="3px 0">
                  <Text display="inline-block" fontWeight="medium">
                    {item.code}
                  </Text>
                </Flex>
              </ShdContainer>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  </ShdContainer>
);
