import { gray, blue, violet, green, mauve } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    // Based on Radix UI Colors, an open-source color system
    colors: {
      ...gray,
      ...blue,
      ...violet,
      ...green,
      ...mauve, //headings
    },
    space: {
      none: "0px",
      "spacing-01": "2px",
      "spacing-02": "4px",
      "spacing-03": "8px",
      "spacing-04": "12px",
      "spacing-05": "16px",
      "spacing-06": "24px",
      "spacing-07": "32px",
      "spacing-08": "40px",
      "spacing-09": "48px",
      "spacing-10": "64px",
      "spacing-11": "80px",
      "spacing-12": "96px",
      "spacing-13": "120px",
      "spacing-14": "160px",
    },
    // Based on Major Third Type Scale, with 16px as base size
    fontSizes: {
      "5xl": "3.052rem",
      "4xl": "2.0441rem",
      "3xl": "1.953rem",
      "2xl": "1.563rem",
      xl: "1.25rem",
      lg: "1.125rem",
      base: "1rem",
      sm: "0.95rem",
      xs: "0.80rem",
    },
    fonts: {
      header: "'Vollkorn', serif",
      default: "'Lato', sans-serif",
    },
    fontWeights: {
      regular: 400,
      "semi-bold": 600,
      bold: 700,
      "extra-bold": 800,
    },
    lineHeights: {
      large: 1.75,
      base: 1.5,
      compact: 1.25,
      none: 1,
    },
    letterSpacings: {
      "tracking-tighter": "-0.05em",
      "tracking-tight": "-0.025em",
      "tracking-normal": "0em",
      "tracking-wide": "0.025em",
      "tracking-wider": "0.05em",
    },
    sizes: {
      1: "2px",
      2: "4px",
      3: "8px",
      4: "16px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: "(min-width: 480px)",
    bp2: "(min-width: 640px)",
    bp3: "(min-width: 768px)",
    bp4: "(min-width: 1024px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    mb: (value) => ({
      marginBottom: value,
    }),
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    size: (value) => ({
      width: value,
      height: value,
    }),
  },
});
