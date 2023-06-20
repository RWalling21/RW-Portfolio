import React from 'react';
import { Flex } from "@chakra-ui/react";

import AboutMe from '../aboutMe/AboutMe';
import Projects from '../projects/Projects';
import ContactMe from '../contactMe/contactMe';
import Footer from '../footer/Footer';

const Hero : React.FC = () => {
    return (
        <Flex 
            direction="column"
            bg="elements.background"
        >
            <AboutMe />

            <Projects />

            <ContactMe />

            <Footer />
        </Flex>
    )
}

export default Hero;
