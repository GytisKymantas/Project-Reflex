export type Colors = keyof typeof colors;

const colors = {
  primary: "#FFFFFF",
  secondary: "#23A6AE",
  lightDark: "#0A1F20",
  Dark: "#0F0F0F",
};

export const theme = {
  colors,
  fontFamily: { primary: "Roboto Slab", secondary: "Open Sans" },
  fontSizes: {
    fs15: "0.9375rem",
    fs16: "1rem",
    fs19: "1.1875rem",
    fs20: "1.25rem",
    fs22: "1.375rem",
    fs24: "1.5rem",
    fs28: "1.75rem",
    fs32: "2rem",
    fs50: "3.125rem",
    fs64: "4rem",
  },
  zIndices: {
    base: -1,
  },
  fontWeights: {
    fw300: 300,
    fw400: 400,
    fw700: 700,
  },
  lineHeights: {
    lh: "1rem",
    lh20: "1.25rem",
    lh27: "1.6875rem",
    lh30: "1.875rem",
    lh38: "2.375rem",
    lh44: "2.75rem",
    lh64: "4rem",
    lh84: "5.25rem",
  },
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  space: {
    s0: "0",
    auto: "auto",
    s10: "0.625rem",
    s16: "1rem",
    s20: "1.25rem",
    s30: "1.875rem",
    s35: "2.1875rem",
    s40: "2.5rem",
    s45: "2.8125rem",
    s60: "3.75rem",
    s65: "4.0625rem",
    s80: "5rem",
    s85: "5.3125rem",
    s95: "5.9375rem",
    s105: "6.5625rem",
    s110: "6.875rem",
    s115: "7.1875rem",
    s120: "7.5rem",
    s125: "7.8125rem",
    s135: "8.4375rem",
    s140: "8.75rem",
    s150: "9.375rem",
    s180: "11.25rem",
    s200: "12.5rem",
    s210: "13.125rem",
    s360: "22.5rem",
  },
  typography: {
    h1: {
      fontSize: "3rem",
      lineHeight: "4rem",
      fontSizeMobile: "2.125rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "4rem",
      lineHeight: "5.2756rem",
      fontSizeMobile: "4rem",
      fontWeight: 400,
    },
  },
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T;
  lmobile: T;
  ltablet: T;
  desktop: T;
};
