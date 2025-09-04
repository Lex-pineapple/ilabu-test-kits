import { Text } from "@chakra-ui/react";

type PriceTextProps = {
  price: number | string;
};

export const PriceText = ({ price }: PriceTextProps) => (
  <Text
    color="lab_red.500"
    fontFamily="secondary"
    fontWeight="medium"
    textStyle="2xl"
  >
    {Number(price).toFixed(2)} р.
  </Text>
);
