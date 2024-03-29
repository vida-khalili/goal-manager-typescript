import { createTheme } from "@mantine/core";

const theme = createTheme({
  colors: {
    "my-color": [
      "#F0F8FF",
      "#CCE6FF",
      "#99CDFF",
      "#66B3FF",
      "#33A0FF",
      "#008CFF",
      "#0E8790",
      "#204866",
      "#005299",
      "#004080",
    ],
  },
  primaryColor: "my-color", // Set the primary color to your custom color key
  fontFamily: "Poppins, sans-serif",
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  headings: {
    sizes: {
      h1: { fontSize: "36px" }, // Assuming you are providing a string value for fontSize
    },
  },
});

export default theme;
