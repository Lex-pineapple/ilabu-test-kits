import { Flex, Group, Text } from "@chakra-ui/react";

type LabContentProps = {
  address?: string;
  name?: string;
  time?: string;
};

export const LabContent = ({ address, name, time }: LabContentProps) => (
  <Flex flexDir="column">
    <Group>
      <Text color="lab_green.900" fontWeight="medium">{`${name} • `}</Text>
      <Text fontWeight="semibold">{time}</Text>
    </Group>
    <Text fontWeight="medium">{address}</Text>
  </Flex>
);
