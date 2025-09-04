import { Link } from "react-router-dom";

import { Button, Card, Flex, Heading, Text } from "@chakra-ui/react";

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
    <CircleGraphic
      color={color}
      positions={{
        x: "-21px",
        y: "-78px",
      }}
    />
    <Card.Header p={3.5} pb={0}>
      <Heading fontFamily="secondary" size="lg">
        {title}
      </Heading>
    </Card.Header>
    <Card.Body p={3.5} pt={0}>
      <Flex direction="column" gap={2}>
        <Text color="lab_grey.900" fontFamily="secondary" textStyle="xs">
          {description}
        </Text>
        <Link to={`/kits/${uid}`}>
          <Button fontFamily="secondary" variant="blocky" w="fit-content">
            Show description
          </Button>
        </Link>
      </Flex>
    </Card.Body>
  </Card.Root>
);
