import { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";

import type { AnalysisItemType } from "#constants/card-product-data";
import { CardAnalysis } from "#shared/card-analysis";
import type { ColorType } from "#shared/circle-graphic/circle-graphic";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { getCartItems, setCartItems } from "#store/slices/cart-slice";
import { removeFromArray } from "#utils/remove-from-array";

export type SortTypes = "nameAsc" | "nameDesc" | "priceAsc" | "priceDesc";

type ListControlledProps = {
  color: ColorType;
  items: (AnalysisItemType & { disabled?: boolean })[];
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
  const [labFiltered, setLabFiltered] =
    useState<(AnalysisItemType & { disabled?: boolean })[]>(items);
  const [filtered, setFiltered] = useState<AnalysisItemType[]>(items);
  const dispatch = useAppDispatch();
  const selected = useAppSelector(getCartItems);

  useEffect(() => {
    if (searchQ)
      setFiltered(
        labFiltered.filter((item) =>
          item.title.toUpperCase().includes(searchQ.toUpperCase()),
        ),
      );
    else setFiltered(labFiltered);
  }, [searchQ, labFiltered]);

  useEffect(() => {
    if (labId)
      setLabFiltered(
        items
          .map((item) =>
            item.execLab.uid === labId ? item : { ...item, disabled: true },
          )
          .sort((a) => (a.disabled ? 1 : -1)),
      );
  }, [labId]);

  useEffect(() => {
    if (sortType === "nameAsc")
      setFiltered([...filtered].sort((a, b) => a.title.localeCompare(b.title)));
    if (sortType === "nameDesc")
      setFiltered([...filtered].sort((a, b) => b.title.localeCompare(a.title)));
    if (sortType === "priceAsc")
      setFiltered([...filtered].sort((a, b) => a.price - b.price));
    if (sortType === "priceDesc")
      setFiltered([...filtered].sort((a, b) => b.price - a.price));
  }, [sortType]);

  const handleSelect = (checked: boolean, uid: string) => {
    const item = filtered.find((item) => item.uid === uid);
    const selectedIndex = item ? selected.indexOf(item) : -1;
    const itemExists = selectedIndex > -1;

    if (!checked && itemExists) {
      const removedArray = removeFromArray<AnalysisItemType>(
        selected,
        selectedIndex,
      );

      dispatch(setCartItems(removedArray));
    }
    if (checked && !itemExists && item)
      dispatch(setCartItems([...selected, item]));
  };

  return (
    <Stack gap={2.5}>
      {filtered.map((item) => (
        <CardAnalysis
          {...item}
          cardType="CHECK"
          handleSelect={handleSelect}
          key={item.testId}
          selected={selected.includes(item)}
        />
      ))}
    </Stack>
  );
};
