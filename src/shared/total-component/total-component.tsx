import { Flex, type FlexProps, Text } from "@chakra-ui/react";

type TotalComponentProps = {
  total: number;
} & FlexProps;

export const TotalComponent = ({ total, ...props }: TotalComponentProps) => (
  <Flex alignItems="center" gap={2.5} {...props}>
    <Text fontWeight="medium" textStyle="md">
      Total:{" "}
    </Text>
    <Text color="lab_red.500" fontWeight="medium" textStyle="2xl">
      {Number(total).toFixed(2)} р.
    </Text>
  </Flex>
);
