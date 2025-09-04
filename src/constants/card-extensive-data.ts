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
      "Capillary blood tests are widely used for medical diagnostics, particularly when only a small blood sample is needed.",
    imgSrc: "",
    instructionTitle: "",
    price: 25.99,
    title: "Capillary Blood Kit",
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
      "Urine tests are widely used in medical diagnostics for their non-invasive nature and the valuable health information they provide.",
    imgSrc: "",
    instructionTitle: "",
    price: 41.99,
    title: "Urine Kit",
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
      "Stool tests are commonly used to diagnose and monitor various gastrointestinal conditions and infections.",
    imgSrc: "",
    instructionTitle: "",
    price: 28.99,
    title: "Stool Kit",
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
      "Urogenital tests are essential for diagnosing and monitoring conditions related to the urinary and reproductive systems.",
    imgSrc: "",
    instructionTitle: "",
    price: 29.99,
    title: "Urogenital Kit",
    uid: "e462c818-5ea1-4473-9f28-37e4691798c2",
    videoInstrustion: "",
  },
  {
    analysisItems: analysisItems,
    benefits: [],
    boxContents: [],
    color: "gray",
    description:
      "Nasal and oral swabs are often used to diagnose respiratory infections.",
    descriptionMin:
      "Nasal and oral swabs are often used to diagnose respiratory infections.",
    imgSrc: "",
    instructionTitle: "",
    price: 19.99,
    title: "Nasal/Oral Swab Kit",
    uid: "1e6a5307-2852-4cf0-b02a-a6fe8dc279c6",
    videoInstrustion: "",
  },
  {
    analysisItems: analysisItems,
    benefits: [],
    boxContents: [],
    color: "cyan",
    description:
      "Saliva tests are growing in popularity for diagnostics due to their non-invasive and easy collection.",
    descriptionMin:
      "Saliva tests are growing in popularity for diagnostics due to their non-invasive and easy collection.",
    imgSrc: "",
    instructionTitle: "",
    price: 105.99,
    title: "Saliva Kit",
    uid: "7c90dba1-2f3e-4166-9483-881550ffc06d",
    videoInstrustion: "",
  },
];
