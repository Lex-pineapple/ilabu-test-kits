import { Box, Container, Flex, Table, Text } from "@chakra-ui/react";

type TestTubeVisualItemType = {
  code: string;
  color: string;
};

type TestTubeVisualProps = {
  items: TestTubeVisualItemType[];
};

export const TestTubeVisual = ({ items }: TestTubeVisualProps) => (
  <Box bg="lab_grey.400" p={3.5}>
    <Table.Root bg="transparent">
      <Table.Header>
        <Table.Row bg="transparent">
          <Table.ColumnHeader
            border="none"
            fontFamily="secondary"
            fontSize="16px"
            p={0}
            pb={1.5}
          >
            Сolor of the test tube
          </Table.ColumnHeader>
          <Table.ColumnHeader
            border="none"
            fontFamily="secondary"
            fontSize="16px"
            p={0}
            pb={1.5}
            textAlign="center"
          >
            Code
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item, idx) => (
          <Table.Row bg="transparent" key={item.color}>
            <Table.Cell border="none">
              <Container
                bg={item.color}
                h="24px"
                m={0}
                p={0}
                w="124px"
              ></Container>
            </Table.Cell>
            <Table.Cell border="none">
              <Flex bg="lab_grey.500" justifyContent="center">
                <Text display="inline-block" mr="2px">
                  {String.fromCharCode(65 + idx)}
                </Text>
                <Text color="white" display="inline-block">
                  {item.code}
                </Text>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  </Box>
);
