import type { ColorType } from "#shared/circle-graphic/circle-graphic";

export type CardExtensiveData = {
  benefits: string[];
  boxContents: [string, number][];
  color: ColorType;
  description: string;
  title: string;
  uid: string;
};

export const cardExtensiveData: CardExtensiveData[] = [
  {
    benefits: [
      "Identification of allergens",
      "Personalized treatment",
      "Improvement of quality of life",
      "Prevention of complications",
      "Educational aspect",
    ],
    boxContents: [
      ["Gauze", 1],
      ["Alcohol Pad", 1],
      ["Bandage", 2],
      ["Collection Card", 1],
      ["Lancets", 3],
      ["Biohazard Bag", 1],
      ["Prepaid Return Label", 1],
    ],
    color: "red",
    description:
      "The Capillary Blood Kit is designed to detect allergic reactions to various allergens that may be present both indoors and outdoors. This test helps determine which substances the body is reacting to, which allows you to take appropriate measures to reduce symptoms and improve your quality of life.",
    title: "Capillary Blood Kit",
    uid: "d6a510a5-fe59-48e9-8576-f9354dffa9b7",
  },
];
