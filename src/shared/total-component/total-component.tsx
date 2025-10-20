import { Flex, type FlexProps, Text } from "@chakra-ui/react";

type TotalComponentProps = {
  total: number;
} & FlexProps;

export const TotalComponent = ({ total, ...props }: TotalComponentProps) => (
  <Flex alignItems="center" gap={2.5} {...props}>
    <Text fontWeight="medium" textStyle="md">
      Итого:{" "}
    </Text>
    <Text color="lab_green.900" fontWeight="medium" textStyle="lg">
      {Number(total).toFixed(2)} BYN
    </Text>
  </Flex>
);
