import type { ColorType } from "#shared/circle-graphic/circle-graphic";

export type AnalysisItemType = {
  description: string;
  price: number;
  title: string;
};

export type CardProductDataType = {
  color: ColorType;
  description: string;
  descriptionMin: string;
  items: AnalysisItemType[];
  price: number;
  title: string;
  uid: string;
};

export const MOCK_UID = "d6a510a5-fe59-48e9-8576-f9354dffa9b7";

export const analysisItems: AnalysisItemType[] = [
  {
    description:
      "Used for monitoring blood sugar levels, particularly in individuals with diabetes.",
    price: 25.99,
    title: "Blood Glucose Test",
  },
  {
    description:
      "Measures the average blood glucose levels over the past 2-3 months, commonly used in diabetes management.",
    price: 125.99,
    title: "Hemoglobin A1c (HbA1c) Test",
  },
  {
    description:
      "Assesses cholesterol levels, including total cholesterol, LDL (low-density lipoprotein), HDL (high-density lipoprotein), and triglycerides.",
    price: 75.0,
    title: "Lipid Panel",
  },
  {
    description:
      "Provides information about the different types of cells in the blood, including red blood cells, white blood cells, and platelets.",
    price: 25.99,
    title: "Complete Blood Count (CBC)",
  },
  {
    description:
      "Used to detect inflammation in the body, which can be a sign of infection or other medical conditions.",
    price: 35.0,
    title: "C-Reactive Protein (CRP) Test",
  },
  {
    description:
      "Measures how long it takes for blood to clot, often used for patients on anticoagulant therapy.",
    price: 20.0,
    title: "Prothrombin Time (PT)/INR Test",
  },
  {
    description:
      "Used to evaluate thyroid function and diagnose thyroid disorders.",
    price: 25.99,
    title: "Thyroid-Stimulating Hormone (TSH) Test",
  },
  {
    description:
      "Measures enzymes and proteins in the blood to assess liver health.",
    price: 199.99,
    title: "Liver Function Tests (LFTs)",
  },
  {
    description:
      "Measures lactate levels, often used in sports medicine or critical care settings.",
    price: 99.0,
    title: "Blood Lactate Test",
  },
  {
    description:
      "Provides information about oxygen, carbon dioxide, and pH levels in the blood, often used in respiratory and critical care.",
    price: 99.0,
    title: "Blood Gas Analysis",
  },
];

export const cardProductData: CardProductDataType[] = [
  {
    color: "red",
    description:
      "Capillary blood tests are widely used for medical diagnostics, particularly when only a small blood sample is needed.",
    descriptionMin:
      "Commonly used in diagnostics when a small blood sample is required.",
    items: analysisItems,
    price: 25.99,
    title: "Capillary Blood Kit",
    uid: "d6a510a5-fe59-48e9-8576-f9354dffa9b7",
  },
  {
    color: "green",
    description:
      "Urine tests are widely used in medical diagnostics for their non-invasive nature and the valuable health information they provide.",
    descriptionMin:
      "Widely used in diagnostics for their non-invasiveness and valuable health data",
    items: analysisItems,
    price: 41.99,
    title: "Urine Kit",
    uid: "dd32e7bf-09b5-4279-8d7a-7ff63de2b109",
  },
  {
    color: "blue",
    description:
      "Stool tests are commonly used to diagnose and monitor various gastrointestinal conditions and infections.",
    descriptionMin:
      "Commonly used to diagnose and monitor various gastrointestinal conditions and infections.",
    items: analysisItems,
    price: 28.99,
    title: "Stool Kit",
    uid: "9ffae799-79be-45b2-91bf-97c094131aa5",
  },
  {
    color: "dk-gray",
    description:
      "Urogenital tests are essential for diagnosing and monitoring conditions related to the urinary and reproductive systems.",
    descriptionMin:
      "Urogenital tests are key for diagnosing and monitoring urinary and reproductive conditions.",
    items: analysisItems,
    price: 29.99,
    title: "Urogenital Kit",
    uid: "e462c818-5ea1-4473-9f28-37e4691798c2",
  },
  {
    color: "gray",
    description:
      "Nasal and oral swabs are often used to diagnose respiratory infections.",
    descriptionMin:
      "Nasal and oral swabs are often used to diagnose respiratory infections.",
    items: analysisItems,
    price: 19.99,
    title: "Nasal/Oral Swab Kit",
    uid: "1e6a5307-2852-4cf0-b02a-a6fe8dc279c6",
  },
  {
    color: "cyan",
    description:
      "Saliva tests are growing in popularity for diagnostics due to their non-invasive and easy collection.",
    descriptionMin:
      "Saliva tests are growing in popularity for diagnostics due to their non-invasive and easy collection.",
    items: analysisItems,
    price: 105.99,
    title: "Saliva Kit",
    uid: "7c90dba1-2f3e-4166-9483-881550ffc06d",
  },
];
