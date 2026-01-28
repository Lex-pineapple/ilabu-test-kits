import { useLoaderData } from "react-router";

import { Container, Flex, Heading } from "@chakra-ui/react";

import type { ColorType } from "#shared/circle-graphic/circle-graphic";
import { ProductCard } from "#shared/product-card";
import type { KitMinimalType } from "#store/types/kits";

const colorsArray: ColorType[] = [
  "blue",
  "cyan",
  "dk-gray",
  "gray",
  "green",
  "red",
];

export const AllProducts = () => {
  const loaderData = useLoaderData<KitMinimalType[]>();

  return (
    <Container p={0} pb={14} pt={10}>
      <Heading fontWeight="bold" pb={6} size="lg" textTransform="uppercase">
        Все продукты
      </Heading>
      <Flex flexDirection="column" gap={2.5}>
        {loaderData.map((item, idx) => (
          <ProductCard
            {...item}
            color={colorsArray[idx]}
            description={item.description_min}
            key={item.id}
          />
        ))}
      </Flex>
    </Container>
  );
};
