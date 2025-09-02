import { Button, Card, Flex, Heading, Link, Text } from "@chakra-ui/react";

import { CircleGraphic } from "#shared/circle-graphic";
import type { ColorType } from "#shared/circle-graphic/circle-graphic";

export type ProductCardProps = {
  description: string;
  title: string;
  uid: string;
  color?: ColorType;
};

export const ProductCard = ({
  color = "red",
  description,
  title,
  uid,
}: ProductCardProps) => (
  <Card.Root
    bg="lab_grey.400"
    borderRadius="none"
    overflow="hidden"
    pl="40%"
    position="relative"
  >
    <CircleGraphic color={color} />
    <Card.Header p={3.5} pb={0}>
      <Heading size="lg">{title}</Heading>
    </Card.Header>
    <Card.Body p={3.5} pt={0}>
      <Flex direction="column" gap={2}>
        <Text color="lab_grey.900" textStyle="xs">
          {description}
        </Text>
        <Link asChild color="lab_grey.50" href={`/product/${uid}`}>
          <Button variant="blocky" w="fit-content">
            Show description
          </Button>
        </Link>
      </Flex>
    </Card.Body>
  </Card.Root>
);
