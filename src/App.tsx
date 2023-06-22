import './App.css';

import React from 'react';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import NavBar from './header/Navbar';
import Hero from './hero/Hero';
import Theme from './Theme';
import Socials from './socials/Socials';

const App : React.FC = () => {
  return (
        <ChakraProvider theme={Theme}>
            <CSSReset />
            <NavBar />

            <Hero />

            <Socials />
        </ChakraProvider>
  );
}

export default App;
