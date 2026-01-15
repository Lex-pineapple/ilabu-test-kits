import { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";

import { NoItemsFound } from "#/components/list-controlled/components/no-items-found";
import { applyFilters } from "#/components/list-controlled/utils";
import { CardAnalysis } from "#shared/card-analysis";
import type { ColorType } from "#shared/circle-graphic/circle-graphic";
import { useAppSelector } from "#store/hooks";
import { getCartItems } from "#store/slices/cart-slice";
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
  const cartItems = useAppSelector(getCartItems);
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
        <CardAnalysis
          {...item}
          cardType="CHECK"
          key={item.id}
          selected={cartItems.some((cartItem) => cartItem.id === item.id)}
        />
      ))}
    </Stack>
  ) : (
    <NoItemsFound />
  );
};
