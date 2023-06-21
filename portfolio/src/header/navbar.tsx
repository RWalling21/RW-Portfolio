import React from 'react';
import { Stack, Flex, Text, Button, Image } from "@chakra-ui/react";
import NavButton from './NavButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

import useNavbarAnimate from './useNavbarAnimate';

const MotionFlex = motion(Flex);

const Navbar : React.FC = () => {   
    const { isVisible, motionProps } = useNavbarAnimate();
    
    return (
        <AnimatePresence>
            {isVisible && (
                <MotionFlex {...motionProps}>
                    <Flex align="center">
                        <Image 
                            src={`${process.env.PUBLIC_URL}/r-logo-low.png`} 
                            mr="1rem" 
                            maxW="50px" maxH="50px" 
                        />
                        <Text fontSize="2xl"> Robert Walling </Text>
                    </Flex>

                    <Stack spacing={8} direction='row' align='center'>
                        <Link to="Home" smooth={true} duration={500}>
                            <NavButton text="Home" />
                        </Link>

                        <Link to="AboutMe" smooth={true} duration={500}>
                            <NavButton text="About Me" />
                        </Link>

                        <Link to="Projects" smooth={true} duration={500}>
                            <NavButton text="Projects" />
                        </Link>

                        <Link to="ContactMe" smooth={true} duration={500}>
                            <NavButton text="Contact Me" />
                        </Link>

                        <Button 
                            variant="outline" 
                            color="navy.button"
                            borderColor="navy.button"
                            _hover={{ bg: "navy.button", color: "navy.buttonText" 
                        }}> 
                            Resume
                        </Button>

                    </Stack>
                </MotionFlex>
            )}
        </AnimatePresence>
    );
}
export default Navbar;
