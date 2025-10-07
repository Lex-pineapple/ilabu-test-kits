import { Link } from "react-router-dom";

import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";

import { ArrowRight } from "#assets/icons/arrow-right";
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
  <Card.Root borderRadius="10" overflow="hidden" pl="35%" position="relative">
    <CircleGraphic
      color={color}
      positions={{
        x: "-21px",
        y: "-78px",
      }}
    />
    <Card.Header p={3.5} pb={2.5}>
      <Heading lineHeight={"16px"} size="md">
        {title}
      </Heading>
    </Card.Header>
    <Card.Body p={3.5} pt={0}>
      <Flex direction="column" gap={2}>
        <Text color="lab_grey.900" fontSize={14} lineHeight={"16px"}>
          {description}
        </Text>
        <Link to={`/kits/${uid}`}>
          <Flex alignItems="center" gap={4} justifyContent="flex-end" p={0}>
            <Text fontSize="14px" fontWeight="medium">
              Подробнее
            </Text>
            <Box bg="lab_green.900" borderRadius={10} p="2px 25px">
              <ArrowRight size="md" />
            </Box>
          </Flex>
        </Link>
      </Flex>
    </Card.Body>
  </Card.Root>
);
