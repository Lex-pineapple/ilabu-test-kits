import { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";

import { applyFilters } from "#/components/list-controlled/utils";
import { CardAnalysis } from "#shared/card-analysis";
import type { ColorType } from "#shared/circle-graphic/circle-graphic";
import type { AnalysisType } from "#store/types/analyses";

export type SortTypes = "nameAsc" | "nameDesc" | "priceAsc" | "priceDesc";

type ListControlledProps = {
  color: ColorType;
  items: (AnalysisType & { disabled?: boolean })[];
  labId?: null | string;
  searchQ?: string;
  sortType?: SortTypes;
};

export const ListControlled = ({
  items,
  labId,
  searchQ = "",
  sortType,
}: ListControlledProps) => {
  const [displayArray, setDisplayArray] = useState<AnalysisType[]>(items);

  useEffect(() => {
    setDisplayArray(
      applyFilters(items, {
        searchQueue: searchQ,
        selectedLabId: labId,
        sortType,
      }),
    );
  }, [labId, searchQ, sortType]);

  return displayArray.length > 0 ? (
    <Stack gap={2.5}>
      {displayArray.map((item) => (
        <CardAnalysis {...item} cardType="CHECK" key={item.id} />
      ))}
    </Stack>
  ) : (
    // TODO: добавить view не найдено
    <div>not found</div>
  );
};
