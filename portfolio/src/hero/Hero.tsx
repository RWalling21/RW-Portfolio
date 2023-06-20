import React from 'react';
import { Flex, Box } from "@chakra-ui/react";

import Home from '../home/Home';
import AboutMe from '../aboutMe/aboutMe';
import Projects from '../projects/Projects';
import ContactMe from '../contactMe/contactMe';
import Footer from '../footer/Footer';

const Hero : React.FC = () => {
    return (
        <Flex 
            direction="column"
            bg="navy.background"
        >
            <Box id="Home">
                <Home />
            </Box>

            <Box id="About Me">
                <AboutMe />
            </Box>

            <Box id="Projects">
                <Projects />
            </Box>

            <Box id="Contact Me">
                <ContactMe />
            </Box>

            <Box id="Footer">
                <Footer />
            </Box>
        </Flex>
    )
}

export default Hero;
