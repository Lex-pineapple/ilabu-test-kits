import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  variants: {
    size: {
      lg: {
        height: 10,
      },
    },
    variant: {
      blocky: {
        bg: "lab_red.500",
        borderRadius: 0,
        color: "lab_grey.50",
        fontSize: "14px",
        h: "32px",
        p: "4px 26px",
      },
      solid: {
        _disabled: {
          bgColor: "lab_grey.500",
          color: "lab_grey.50",
          opacity: 1,
        },
        bgColor: "lab_red.500",
        borderBottom: "2px solid #18181B",
        borderRadius: 8,
      },
    },
  },
});

const inputRecipe = defineRecipe({
  variants: {
    variant: {
      outline: {
        _placeholder: {
          color: "lab_grey.200",
          fontSize: "14px",
          fontWeight: "600",
          textAlign: "center",
          textTransform: "uppercase",
        },
        bg: "lab_red.50",
        border: "none",
        borderBottom: "2px solid #FF2121",
        borderRadius: "8px",
      },
    },
  },
});

const config = defineConfig({
  theme: {
    recipes: {
      button: buttonRecipe,
      input: inputRecipe,
    },
    tokens: {
      colors: {
        lab_black: {
          900: {
            value: "#18181B",
          },
        },
        lab_grey: {
          200: {
            value: "#ADADAD",
          },
          400: {
            value: "#F2EDED",
          },
          50: {
            value: "#F9FAFB",
          },
          500: {
            value: "#BDBDBD",
          },
          900: {
            value: "#545454",
          },
        },
        lab_red: {
          50: {
            value: "#FF00000D",
          },
          500: {
            value: "#FF2121",
          },
        },
      },
      fonts: {
        body: { value: "Montserrat Variable" },
        heading: { value: "Montserrat Variable" },
        secondary: { value: "Roboto Variable" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
