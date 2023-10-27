import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    main: {
      background: "#1E2024",
      headline: "#00b5c6",
      paragraph: "#F3F7FF",
      button: "#00b5c6",
      buttonText: "#1E2024",
      buttonHover: "#E67A00"
    },
  },
});

export default Theme;