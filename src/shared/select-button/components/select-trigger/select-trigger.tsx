import { Button, useSelectContext } from "@chakra-ui/react";

import { SortIcon } from "#assets/icons/sort-icon";
import type { ListType } from "#shared/select-button/select-button";

export const SelectTrigger = () => {
  const select = useSelectContext();
  const items = select.selectedItems as ListType[];

  return (
    <Button
      bg="lab_green.900"
      border="none"
      variant="outline"
      {...select.getTriggerProps()}
      p={0}
    >
      <SortIcon color="#fff" size="lg" />
    </Button>
  );
};
