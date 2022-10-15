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
    fs10: "0.625rem",
    fs15: "0.9375rem",
    fs16: "1rem",
    fs19: "1.1875rem",
    fs20: "1.25rem",
    fs22: "1.375rem",
    fs24: "1.5rem",
    fs28: "1.75rem",
    fs32: "2rem",
    fs48: "3rem",
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
    lh27p24: "27.24px",
    lh30: "1.875rem",
    lh38: "2.375rem",
    lh44: "2.75rem",
    lh63p3: "63.3px",
    lh84p41: "84.41px",
  },
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  typography: {
    h1: {
      fontSize: "48px",
      lineHeight: "63.3px",
      fontWeight: 400,
      fontSizeMobile:"48px",
      lineHeightMobile:"63.3px",
    },
    h2: {
      fontSize: "64px",
      lineHeight: "84.41px",
      fontWeight: 400,
      fontSizeMobile:"64px",
      lineHeightMobile:"84.41px",
    },
    h3: {
      fontSize: "64px",
      lineHeight: "84.41px",
      fontWeight: 400,
      fontSizeMobile:"48px",
      lineHeightMobile:"63.3px",
    },
    h4: {
      fontSize: "32px",
      lineHeight: "44px",
      fontWeight: 400,
      fontSizeMobile:"32px",
      lineHeightMobile:"44px",
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
