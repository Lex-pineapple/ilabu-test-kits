import { Container, Flex, Heading } from "@chakra-ui/react";

import { cardExtensiveData } from "#constants/card-extensive-data";
import { ProductCard } from "#shared/product-card";

export const AllProducts = () => (
  <Container p={0} pt={10}>
    <Heading fontWeight="bold" pb={6} size="lg" textTransform="uppercase">
      Все продукты
    </Heading>
    <Flex flexDirection="column" gap={2.5}>
      {cardExtensiveData.map((item) => (
        <ProductCard {...item} description={item.descriptionMin} />
      ))}
    </Flex>
  </Container>
);
