import React from 'react';
import { Stack, Flex, Text, Image } from "@chakra-ui/react";
import NavButton from './NavButton';

const Navbar : React.FC = () => {      
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            pl="4rem" pr="4rem" pt="2rem" pb="3rem"
            bg="navy.background"
            color="white"
        >
            <Flex align="center">
                <Image src="logo.png" fallbackSrc='https://via.placeholder.com/75' mr="1rem" />
                <Text fontSize="2xl"> Robert Walling </Text>
            </Flex>

            <Stack spacing={8} direction='row' align='center'>
                <NavButton text="Home" section="Home" />
                <NavButton text="About Me" section="AboutMe" />
                <NavButton text="Projects" section="Projects" />
                <NavButton text="Contact Me" section="ContactMe" />
            </Stack>
        </Flex>
    );
}
export default Navbar;
