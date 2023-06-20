import React from 'react';
import AboutMe from '../aboutMe/AboutMe';
import { Flex } from "@chakra-ui/react";

const Hero : React.FC = () => {
    return (
        <Flex 
            bg="elements.background" 
            height="100vh" 
            pr="4rem" pl="4rem"
        >
            <AboutMe />
        </Flex>
    )
}

export default Hero;
