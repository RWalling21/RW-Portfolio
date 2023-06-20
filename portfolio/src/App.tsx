import './App.css';

import React from 'react';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import NavBar from './header/Navbar';
import Hero from './hero/Hero';
import Theme from './Theme';

const App : React.FC = () => {
  return (
        <ChakraProvider theme={Theme}>
            <CSSReset />
            <NavBar />

            <Hero />
        </ChakraProvider>
  );
}

export default App;
