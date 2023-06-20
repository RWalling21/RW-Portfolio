import React from 'react';
import { Stack, Flex, Text } from "@chakra-ui/react";
import NavButton from './NavButton';

const Navbar : React.FC = () => {      
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="3rem"
            bg="elements.background"
            color="white"
        >
            <Flex align="center" mr={5}>
                <Text fontSize='3xl'> Robert Walling </Text>
            </Flex>

            <Stack spacing={8} direction='row' align='center'>
                <NavButton>
                    Home 
                </NavButton>
                <NavButton>
                    About Me
                </NavButton>
                <NavButton>
                    Projects
                </NavButton>
                <NavButton>
                    Contact Me
                </NavButton>
            </Stack>
        </Flex>
    );
}
export default Navbar;
