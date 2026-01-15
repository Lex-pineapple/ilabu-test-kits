import type { SortTypes } from "#/components/list-controlled/list-controlled";
import type { AnalysisType } from "#store/types/analyses";

type FilterType = {
  searchQueue: string;
  selectedLabId?: null | string;
  sortType?: SortTypes;
};

export const applyFilters = (
  arrayToFilter: AnalysisType[],
  filters: FilterType,
) => {
  let filteredArray = arrayToFilter;

  if (filters.selectedLabId)
    filteredArray = filteredArray.filter(
      (item) => item.lab_id === filters.selectedLabId,
    );

  if (filters.searchQueue)
    filteredArray = filteredArray.filter((item) =>
      item.title.toUpperCase().includes(filters.searchQueue.toUpperCase()),
    );
  if (filters.sortType) {
    switch (filters.sortType) {
      case "nameAsc":
        filteredArray = [...filteredArray].sort((a, b) =>
          a.title.localeCompare(b.title),
        );
        break;
      case "nameDesc":
        filteredArray = [...filteredArray].sort((a, b) =>
          b.title.localeCompare(a.title),
        );
        break;
      case "priceAsc":
        filteredArray = [...filteredArray].sort(
          (a, b) => Number(a.price) - Number(b.price),
        );
        break;
      case "priceDesc":
        filteredArray = [...filteredArray].sort(
          (a, b) => Number(b.price) - Number(a.price),
        );
        break;
      default:
        break;
    }
  }

  return filteredArray;
};
