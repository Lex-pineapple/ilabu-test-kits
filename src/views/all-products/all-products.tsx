import { Flex } from "@chakra-ui/react";

import { cardProductData } from "#constants/card-product-data";
import { HeaderWBg } from "#shared/header-w-bg";
import { ProductCard } from "#shared/product-card";

export const AllProducts = () => (
  <div>
    <HeaderWBg m="0 0 48px 0">All Products</HeaderWBg>
    <Flex flexDirection="column" gap={6} p={3.5}>
      {cardProductData.map((item) => (
        <ProductCard {...item} />
      ))}
    </Flex>
  </div>
);
