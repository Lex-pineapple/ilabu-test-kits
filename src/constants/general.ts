export const genderData = [
  {
    label: "Женский",
    value: "female",
  },
  {
    label: "Мужской",
    value: "male",
  },
];

export const deliveryData = [
  {
    label: "Самостоятельная доставка",
    value: "personal",
  },
  {
    label: "Курьерская доставка Mylab",
    value: "courier",
  },
];

type TubeColorType = {
  contrast: string;
  fill: string;
  name: string;
};

export const TUBE_COLORS: {
  [key: string]: TubeColorType;
} = {
  blue: {
    contrast: "#fff",
    fill: "#525aff",
    name: "синий",
  },
  green: {
    contrast: "#fff",
    fill: "#0c760c",
    name: "зеленый",
  },
  orange: {
    contrast: "#000",
    fill: "#ffa500",
    name: "оранжевый",
  },
  red: {
    contrast: "#fff",
    fill: "#ff3737",
    name: "красный",
  },
  white: {
    contrast: "#000",
    fill: "white",
    name: "белый",
  },
  yellow: {
    contrast: "#000",
    fill: "#ffffa0",
    name: "желтый",
  },
};
