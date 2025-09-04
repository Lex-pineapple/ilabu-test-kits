import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
  defineSlotRecipe,
} from "@chakra-ui/react";
import { checkboxCardAnatomy, selectAnatomy } from "@chakra-ui/react/anatomy";

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
      secondary: {
        bg: "transparent",
        border: "1px solid #B0B0B0",
        borderRadius: "6px",
        fontFamily: "secondary",
        textStyle: "xs",
      },
    },
  },
});

const checkmarkRecipe = defineRecipe({
  variants: {
    variant: {
      outline: {
        "&:is([data-state=checked], [data-state=indeterminate])": {
          bg: "white",
          borderColor: "colorPalette.solid",
          color: "red",
        },
        bg: "white",
        border: "none",
        borderRadius: "50%",
        boxShadow: "0px 0px 4px 0px #00000040",
        h: "24px",
        w: "24px",
      },
    },
  },
});

export const checkboxCardSlotRecipe = defineSlotRecipe({
  className: "chakra-checkbox-card",
  slots: checkboxCardAnatomy.keys(),
  variants: {
    variant: {
      surface: {
        indicator: checkmarkRecipe.variants?.variant.outline,
        root: {
          _checked: {
            bg: "white",
            boxShadow: "0px 0px 4px 0px #00000040",
          },
          _disabled: {
            bg: "bg.muted",
          },
          bg: "lab_grey.400",
          border: "none",
          borderRadius: "none",
        },
      },
    },
  },
});

export const selectSlotRecipe = defineSlotRecipe({
  slots: selectAnatomy.keys(),
  variants: {
    variant: {
      colored: {
        content: {
          bg: "#fff3f2",
          border: "none",
          borderBottom: "2px solid #FF2121",
          borderRadius: "9px",
          boxShadow: "0px 4px 14px 0px #00000040",
          p: "12px",
        },
        item: {
          borderBottom: "1px solid #FFB4B4",
          fontSize: "14px",
          justifyContent: "center",
          textTransform: "uppercase",
        },
        trigger: {
          _expanded: {
            borderColor: "border.emphasized",
          },

          bg: "lab_red.50",
          border: "none",
          borderBottom: "2px solid #FF2121",
          borderRadius: "8px",
        },
        valueText: {
          color: "lab_grey.200",
          fontSize: "14px",
          fontWeight: "600",
          textTransform: "uppercase",
        },
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
    slotRecipes: {
      checkboxCard: checkboxCardSlotRecipe,
      select: selectSlotRecipe,
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
