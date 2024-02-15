import { createTheme, rem } from "@mantine/core";

const theme = createTheme({
  breakpoints: {
    xs: "px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
  },
  primaryColor: "cyan",
  fontFamily: "Poppins, sans-serif",
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  headings: {
    // fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});

export default theme;
