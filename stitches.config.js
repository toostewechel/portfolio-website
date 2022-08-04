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
      none: '0px',
      'spacing-01': '2px',
      'spacing-02': '4px',
      'spacing-03': '8px',
      'spacing-04': '12px',
      'spacing-05': '16px',
      'spacing-06': '24px',
      'spacing-07': '32px',
      'spacing-08': '40px',
      'spacing-09': '48px',
      'spacing-10': '64px',
      'spacing-11': '80px',
      'spacing-12': '96px',
      'spacing-13': '120px',
      'spacing-14': '160px',
    },
    // Based on Major Third Type Scale, with 16px base size
    fontSizes: {
      'header-1': '3.052rem',
      'header-2': '2.0441rem',
      'header-3': '1.953rem',
      'header-4': '1.563rem',
      'header-5': '1.25rem',

      body: '1.0625rem',

      button: '1rem',
      caption: '0,75rem',
    },
    fonts: {
      header: "'Vollkorn', serif",
      default: "'Lato', sans-serif",
    },
    fontWeights: {
      'extra-bold': 800,
      'bold': 700,
      'semi-bold': 600,
      regular: 400,
    },
    lineHeights: {
      header: 1.2,
      body: 1.5,
      none: 1,
    },
    letterSpacings: {
      'tracking-tighter': '-0.05em',
      'tracking-tight': '-0.025em',
      'tracking-normal': '0em',
      'tracking-wide': '0.025em',
      'tracking-wider': '0.05em',
    },
    sizes: {},
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
  },
});
