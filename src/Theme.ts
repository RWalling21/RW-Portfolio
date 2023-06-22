import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    navy: {
      background: "#232946",
      headline: "#fffffe",
      paragraph: "#b8c1ec",
      button: "#eebbc3",
      buttonText: "#232946",
      buttonHover: "#d4d8f0"
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