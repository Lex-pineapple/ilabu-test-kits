import { Flex } from "@chakra-ui/react";

import { cardExtensiveData } from "#constants/card-extensive-data";
import { HeaderWBg } from "#shared/header-w-bg";
import { ProductCard } from "#shared/product-card";

export const AllProducts = () => (
  <div>
    <HeaderWBg m="0 0 48px 0">All Products</HeaderWBg>
    <Flex flexDirection="column" gap={6} p={3.5}>
      {cardExtensiveData.map((item) => (
        <ProductCard {...item} description={item.descriptionMin} />
      ))}
    </Flex>
  </div>
);
