import React from 'react';
import logo from "./logo.png";
import { Button, Box, Stack, Flex, Text, Image } from "@chakra-ui/react";

interface NavButtonProps {
    children: React.ReactNode;
}

const NavButton : React.FC<NavButtonProps> = ({ children }) => {
    return (
        <Button colorScheme='teal' size='sm' variant='outline'>
            { children }
        </Button>
    )
}

const Navbar : React.FC = () => {  
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            bg="darkGray.500"
            color="white"
        >
            <Flex align="center" mr={5}>
                <h2> Robert Walling </h2>
            </Flex>

            <Box
                display={{ base: "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Stack spacing={16} direction='row' align='center'>
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
            </Box>
        </Flex>
    );
}
export default Navbar;

