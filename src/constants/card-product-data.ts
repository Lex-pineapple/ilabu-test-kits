import type { ColorType } from "#shared/circle-graphic/circle-graphic";

export type AnalysisItemType = {
  description: string;
  price: number;
  testId: string;
  title: string;
  uid: string;
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
    description: "Исследование генов системы артериального давления",
    price: 25.99,
    testId: "INSG41",
    title: "Анализ генов системы артериального давления",
    uid: "1",
  },
  {
    description: "Исследование генов системы тромбообразования",
    price: 125.99,
    testId: "INSG42",
    title: "Анализ генов системы тромбообразования (гемостаза)",
    uid: "2",
  },
  {
    description:
      "Диагностика эффективности терапии лекарственным препаратом метотрексат",
    price: 160.0,
    testId: "INSG56",
    title: "ДНК диагностика эффективности терапии препаратом Метотрексат",
    uid: "3",
  },
  {
    description:
      "Диагностика эффективности терапии лекарственным препаратом метотрексат",
    price: 25.99,
    testId: "INSG56",
    title: "ДНК диагностика эффективности терапии препаратом Метотрексат",
    uid: "4",
  },
  {
    description:
      "Исследование эффективности сосудорасширяющих препаратов (донаторов азота) на основе ДНК-диагностики",
    price: 35.0,
    testId: "INSG55",
    title:
      "ДНК диагностика эффективности терапии сосудорасширяющими препаратами из группы донаторов азота",
    uid: "5",
  },
  {
    description: "Определение предрасположенности к костным переломам",
    price: 20.0,
    testId: "INSG48",
    title: "ДНК-анализ предрасположенности к остеопорозу",
    uid: "6",
  },
  {
    description:
      "Определение типа волокон коллагена и других факторов, влияющих на разрывы и растяжения связок и сухожилий",
    price: 25.99,
    testId: "INSG62",
    title:
      "ДНК-анализ предрасположенности к разрывам и растяжениям связок и сухожилий",
    uid: "7",
  },
  {
    description:
      "Помогает определить допустимость применения оральных контрацептивов по ДНК-анализу некоторых генов",
    price: 199.99,
    testId: "INSG52",
    title:
      "ДНК-диагностика опасности тромбообразования у женщин, принимающих гормональные контрацептивы",
    uid: "8",
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
