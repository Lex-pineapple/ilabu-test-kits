import { Flex } from "@chakra-ui/react";

import { cardProductData } from "#constants/card-product-data";
import { CardCollapsible } from "#shared/card-collapsible";

export const AvailableKit = () => (
  <Flex flexDirection="column" gap={6} m="24px 14px">
    {cardProductData.map((item) => (
      <CardCollapsible
        description={item.descriptionMin}
        items={item.items}
        title={item.title}
      />
    ))}
  </Flex>
);
