import { createListCollection } from "@chakra-ui/react";

export const genderData = createListCollection({
  items: [
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Other",
      value: "other",
    },
  ],
});

export const deliveryData = createListCollection({
  items: [
    {
      label: "Personal delivery",
      value: "personal",
    },
    {
      label: "Courier",
      value: "courier",
    },
    {
      label: "Parcel locker",
      value: "parcel",
    },
  ],
});
