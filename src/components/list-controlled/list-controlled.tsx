import { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";

import type { AnalysisItemType } from "#constants/card-product-data";
import type { ColorType } from "#shared/circle-graphic/circle-graphic";
import { ListCard } from "#shared/list-card";
import { removeFromArray } from "#utils/remove-from-array";

type ListControlledProps = {
  color: ColorType;
  items: AnalysisItemType[];
  searchQ?: string;
  sortType?: string;
};

export const ListControlled = ({
  color,
  items,
  searchQ = "",
  sortType,
}: ListControlledProps) => {
  const [selected, setSelected] = useState<AnalysisItemType[]>([]);
  const [filtered, setFiltered] = useState<AnalysisItemType[]>(items);

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

  const handleSelect = (checked: boolean, item: AnalysisItemType) => {
    const selectedIndex = selected.indexOf(item);
    const itemExists = selectedIndex > -1;

    if (!checked && itemExists)
      setSelected(removeFromArray(selected, selectedIndex));
    if (checked && !itemExists) setSelected([...selected, item]);
  };

  return (
    <Stack gap={2.5}>
      {filtered.map((item) => (
        <ListCard
          {...item}
          color={color}
          handleSelect={handleSelect}
          key={item.title}
          selected={selected.includes(item)}
        />
      ))}
    </Stack>
  );
};
