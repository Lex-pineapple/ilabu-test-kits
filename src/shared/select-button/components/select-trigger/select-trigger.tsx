import { Button, Text, useSelectContext } from "@chakra-ui/react";

import { ArrowDownIcon } from "#assets/icons/arrow-down";
import type { ListType } from "#shared/select-button/select-button";

export const SelectTrigger = () => {
  const select = useSelectContext();
  const items = select.selectedItems as ListType[];

  return (
    <Button variant="outline" {...select.getTriggerProps()}>
      <Text lineClamp={1} maxW={100}>
        {items.length ? items[0].label : "Sort by"}
      </Text>
      <ArrowDownIcon size="xs" />
    </Button>
  );
};
