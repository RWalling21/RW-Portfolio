import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    navy: {
      background: "#1E2024",
      headline: "#09C6D7",
      paragraph: "#F3F7FF",
      button: "#09C6D7",
      buttonText: "#1E2024",
      buttonHover: "#E67A00"
    },
    lightBlue: {
      background: "#d4d8f0",
      headline: "#232946",
      paragraph: "#232946",
      cardBackground: "#fffffe",
      cardText: "#232946",
    },
  },
});

export default Theme;