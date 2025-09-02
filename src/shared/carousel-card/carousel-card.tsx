import { Box, Card, Heading, Text } from "@chakra-ui/react";

import {
  CircleGraphic,
  type ColorType,
} from "#shared/circle-graphic/circle-graphic";

type CaroouselCardProps = {
  color: ColorType;
  description: string;
  price: number;
  title: string;
};

export const CarouselCard = ({
  color,
  description,
  price,
  title,
}: CaroouselCardProps) => (
  <Card.Root
    bg="lab_grey.400"
    border="none"
    borderRadius="none"
    h={367}
    maxW={228}
    overflow="hidden"
  >
    <Box height={224} position="relative" w="100%">
      <CircleGraphic
        color={color}
        positions={{
          x: "-62px",
          y: "-18px",
        }}
        size={266}
      />
    </Box>
    <Card.Header p="224px 14px 0">
      <Heading fontFamily="secondary" size="lg">
        {title}
      </Heading>
    </Card.Header>
    <Card.Body p="6px 14px 20px">
      <Text color="lab_grey.900" fontFamily="secondary" textStyle="xs">
        {description}
      </Text>
    </Card.Body>
    <Card.Footer justifyContent="end" p="0 14px 14px">
      <Text
        color="lab_red.500"
        fontFamily="secondary"
        fontWeight="medium"
        textStyle="2xl"
      >
        €{price}
      </Text>
    </Card.Footer>
  </Card.Root>
);
