import React from 'react';
import { Flex } from "@chakra-ui/react";

import Home from '../home/Home';
import Projects from '../projects/Projects';
import ContactMe from '../contactMe/contactMe';
import Footer from '../footer/Footer';

const Hero : React.FC = () => {
    return (
        <Flex 
            direction="column"
            bg="elements.background"
        >
            <Home />

            <Projects />

            <ContactMe />

            <Footer />
        </Flex>
    )
}

export default Hero;
