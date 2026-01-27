import { Flex, Group, Text } from "@chakra-ui/react";

type LabContentProps = {
  address?: string;
  name?: string;
  time?: string;
};

export const LabContent = ({ address, name, time }: LabContentProps) => (
  <Flex flexDir="column" w="100%">
    <Group>
      <Text
        color="lab_green.900"
        fontWeight="medium"
        textAlign="left"
        textWrap="auto"
      >
        {name}
      </Text>
      <Text> • </Text>
      <Text fontWeight="semibold">{time}</Text>
    </Group>
    <Text fontWeight="medium" textAlign="left">
      {address}
    </Text>
  </Flex>
);
