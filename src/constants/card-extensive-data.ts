import {
  analysisItems,
  type AnalysisItemType,
} from "#constants/card-product-data";
import type { ColorType } from "#shared/circle-graphic/circle-graphic";

export type CardExtensiveDataType = {
  analysisItems: AnalysisItemType[];
  benefits: string[];
  boxContents: [string, number][];
  color: ColorType;
  description: string;
  descriptionMin: string;
  imgSrc: string;
  instructionTitle: string;
  price: number;
  title: string;
  uid: string;
  videoInstrustion: string;
};

export const cardExtensiveData: CardExtensiveDataType[] = [
  {
    analysisItems: analysisItems,
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
    descriptionMin:
      "Тесты в слюне набирают популярность в диагностике благодаря своей неинвазивности и простоте сбора",
    imgSrc: "",
    instructionTitle: "",
    price: 25.99,
    title: "Набор для самостоятельного взятия биологического материала: слюна",
    uid: "d6a510a5-fe59-48e9-8576-f9354dffa9b7",
    videoInstrustion: "",
  },
  {
    analysisItems: analysisItems,
    benefits: [],
    boxContents: [],
    color: "green",
    description:
      "Urine tests are widely used in medical diagnostics for their non-invasive nature and the valuable health information they provide.",
    descriptionMin:
      "Используется для проведения общих и биохимических анализов, диагностики инфекций и многого другого",
    imgSrc: "",
    instructionTitle: "",
    price: 41.99,
    title: "Набор для самостоятельного взятия биологического материала: моча",
    uid: "dd32e7bf-09b5-4279-8d7a-7ff63de2b109",
    videoInstrustion: "",
  },
  {
    analysisItems: analysisItems,
    benefits: [],
    boxContents: [],
    color: "blue",
    description:
      "Stool tests are commonly used to diagnose and monitor various gastrointestinal conditions and infections.",
    descriptionMin:
      "Используются для диагностики и контроля различных заболеваний и инфекций желудочно-кишечного тракта",
    imgSrc: "",
    instructionTitle: "",
    price: 28.99,
    title: "Набор для самостоятельного взятия биологического материала: КАЛ",
    uid: "9ffae799-79be-45b2-91bf-97c094131aa5",
    videoInstrustion: "",
  },
  {
    analysisItems: analysisItems,
    benefits: [],
    boxContents: [],
    color: "dk-gray",
    description:
      "Urogenital tests are essential for diagnosing and monitoring conditions related to the urinary and reproductive systems.",
    descriptionMin:
      "Набор сконструирован для простого и удобного сбора мочи у маленьких детей в домашних условиях",
    imgSrc: "",
    instructionTitle: "",
    price: 29.99,
    title:
      "Набор для самостоятельного взятия биологического материала: моча (у новорожденных и грудных детей)",
    uid: "e462c818-5ea1-4473-9f28-37e4691798c2",
    videoInstrustion: "",
  },
];
