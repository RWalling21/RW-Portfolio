import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    colors: {
        teal: {
            500: "#38B2AC",
        },
        darkGray: {
            500: "#2D3748",
        }
    },
});

export default Theme;