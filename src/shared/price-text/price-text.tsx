import { Text, type TextProps } from "@chakra-ui/react";

type PriceTextProps = {
  price: number | string;
} & TextProps;

export const PriceText = ({ price, ...props }: PriceTextProps) => (
  <Text
    color="lab_green.900"
    fontFamily="secondary"
    fontWeight="medium"
    textStyle="2xl"
    whiteSpace="nowrap"
    {...props}
  >
    {Number(price).toFixed(2)} BYN
  </Text>
);
