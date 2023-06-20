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
            pl="4rem" pr="4rem" pt="3rem" pb="3rem"
            bg="elements.background"
            color="white"
        >
            <Flex align="center">
                <Image fallbackSrc='https://via.placeholder.com/75' />
                <Text fontSize="2xl"> Robert Walling </Text>
            </Flex>

            <Stack spacing={8} direction='row' align='center'>
                <NavButton text="Home" />
                <NavButton text="About Me" />
                <NavButton text="Projects" />
                <NavButton text="Contact Me" />
            </Stack>
        </Flex>
    );
}
export default Navbar;
