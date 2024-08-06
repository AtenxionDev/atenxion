/* eslint-disable */

import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      yellow: string;
      black: string;
      white: string;
      darkGrey: string;
      grey: string;
      lightGrey: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      yellow: string;
      black: string;
      white: string;
      darkGrey: string;
      grey: string;
      greyText: string;
      lightGrey: string;
    };
  }
}
const theme = createTheme({
  typography: {
    fontFamily: ["Outfit", "Inter", "Roboto Mono"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#1C64FF",
      light: "#e8f0ff",
    },
    secondary: {
      main: "#F1EEEF",
    },
    success: {
      main: "#6AC874",
    },
    error: {
      main: "#ef476f",
    },
    // warning: {
    //   main: "#F8BB4D",
    // },
    custom: {
      yellow: "#F8BB4D",
      black: "#1d212b",
      white: "#ffffff",
      darkGrey: "#8e9095",
      grey: "#dddedf",
      greyText: "#343A40",
      lightGrey: "#f4f4f4",
    },
  },
});

export default theme;
