import React from 'react';
import './App.css';
import NavBar from './header/Navbar';
import Hero from './hero/Hero';
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    colors: {
      teal: {
        500: "#38B2AC",
      },
    },
  });

const App : React.FC = () => {
  return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <NavBar />

            <Hero />
        </ChakraProvider>
  );
}

export default App;
