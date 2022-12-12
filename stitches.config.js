import {
  gray,
  blue,
  yellow,
  violet,
  orange,
  violetA,
  plum,
  green,
  mauve,
  mauveA,
  mauveDarkA,
  whiteA,
  blackA,
  crimson,
  crimsonA,
} from "@radix-ui/colors";
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
      ...orange,
      ...violetA,
      ...green,
      ...mauve,
      ...mauveA,
      ...mauveDarkA,
      ...whiteA,
      ...blackA,
      ...crimson,
      ...crimsonA,
      ...plum,
      ...yellow,
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
    // Based on Major Third Type Scale, with 18px as base size
    fontSizes: {
      "5xl": "4.209rem",
      "4xl": "3.157rem",
      "3xl": "2.369rem",
      "2xl": "1.777rem",
      xl: "1.33rem",
      lg: "1.125rem",
      base: "1rem",
      sm: "0.95rem",
      xs: "0.80rem",
      bodyLarge: "1.20rem",
    },
    fonts: {
      header: "'Vollkorn', serif",
      default: "'Gotham', sans-serif",
      mono: "'IBM Plex Mono', monospace",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      "semi-bold": 600,
      bold: 700,
      "extra-bold": 800,
      black: 900,
    },
    lineHeights: {
      large: 1.65,
      base: 1.55,
      compact: 1.25,
      tight: 1.1,
      none: 1,
    },
    letterSpacings: {
      "tracking-tighter": "-0.05em",
      "tracking-tight": "-0.025em",
      "tracking-normal": "0em",
      "tracking-wide": "0.0025em",
      "tracking-wider": "0.005em",
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
      9: "80px",
      10: "96px",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      toolbar:
        "0px 22.3363px 17.869px rgba(0, 0, 0, 0.0787009), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.0894223), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0998636), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.12)",
      smooth:
        "0px 6px 54px rgba(0, 0, 0, 0.07), 0px 2.69998px 22.5599px rgba(0, 0, 0, 0.0536176), 0px 1.42899px 12.0616px rgba(0, 0, 0, 0.0486019), 0px 0.74143px 6.76164px rgba(0, 0, 0, 0.0447987), 0px 0.343221px 3.59106px rgba(0, 0, 0, 0.0398249), 0px 0.116181px 1.49432px rgba(0, 0, 0, 0.0306816)",
      inset: "inset 1px 1px 4px rgba(0, 0, 0, 0.3)",
    },
    zIndices: {},
    transitions: {},
    gradients: {
      purple:
        "linear-gradient(314.17deg, #3F1ABC 25.73%, rgba(63, 26, 188, 0.65) 77.9%);",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
    bp2: "(min-width: 640px)",
    bp3: "(min-width: 768px)",
    bp4: "(min-width: 1024px)",
    bp5: "(min-width: 1440px)",
  },
  utils: {
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
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value) => ({
      width: value,
      height: value,
    }),
  },
});
