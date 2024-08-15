/* eslint-disable */
"use client";

import { createTheme } from "@mui/material/styles";

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
      borderDarkBlue: string;
      cream: string;
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
    fontFamily: [, "Inter", "Outfit", "Roboto Mono"].join(","),
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
      main: "#031E59",
      light: "#F2EFEA",
    },
    success: {
      main: "#4D85FF",
    },
    error: {
      main: "#ef476f",
    },
    // warning: {
    //   main: "#F8BB4D",
    // },
    custom: {
      borderDarkBlue: "#293A5E",
      cream: "#f2f2f2",
      black: "#252524",
      white: "#ffffff",
      darkGrey: "#d9d9d9",
      grey: "#f8f8f8",
      greyText: "#343A40",
      lightGrey: "#fafafa",
    },
  },
});

export default theme;
