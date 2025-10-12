import { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";

import type { AnalysisItemType } from "#constants/card-product-data";
import { CardAnalysis } from "#shared/card-analysis";
import type { ColorType } from "#shared/circle-graphic/circle-graphic";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { getCartItems, setCartItems } from "#store/slices/cart-slice";
import { removeFromArray } from "#utils/remove-from-array";

type ListControlledProps = {
  color: ColorType;
  items: AnalysisItemType[];
  searchQ?: string;
  sortType?: string;
};

export const ListControlled = ({
  items,
  searchQ = "",
  sortType,
}: ListControlledProps) => {
  const [filtered, setFiltered] = useState<AnalysisItemType[]>(items);
  const dispatch = useAppDispatch();
  const selected = useAppSelector(getCartItems);

  useEffect(() => {
    if (searchQ)
      setFiltered(
        items.filter((item) =>
          item.title.toUpperCase().includes(searchQ.toUpperCase()),
        ),
      );
    else setFiltered(items);
  }, [searchQ]);

  useEffect(() => {
    if (sortType === "asc")
      setFiltered([...filtered].sort((a, b) => a.title.localeCompare(b.title)));
    if (sortType === "desc")
      setFiltered([...filtered].sort((a, b) => b.title.localeCompare(a.title)));
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
