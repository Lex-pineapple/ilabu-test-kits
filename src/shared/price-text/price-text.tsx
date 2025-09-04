import { Text, type TextProps } from "@chakra-ui/react";

type PriceTextProps = {
  price: number | string;
} & TextProps;

export const PriceText = ({ price, ...props }: PriceTextProps) => (
  <Text
    color="lab_red.500"
    fontFamily="secondary"
    fontWeight="medium"
    textStyle="2xl"
    {...props}
  >
    {Number(price).toFixed(2)} р.
  </Text>
);
