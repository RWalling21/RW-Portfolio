import React from 'react';
import { Stack, Flex, Text, Button, Image } from "@chakra-ui/react";
import NavButton from './NavButton';
import { motion, AnimatePresence } from 'framer-motion';

import useNavbarAnimate from './useNavbarAnimate';

const MotionFlex = motion(Flex);

const Navbar : React.FC = () => {   
    const { isVisible, motionProps } = useNavbarAnimate();
    
    return (
        <AnimatePresence>
            {isVisible && (
                <MotionFlex {...motionProps}>
                    <Flex align="center">
                        <Image src="" fallbackSrc='https://via.placeholder.com/50' mr="1rem" />
                        <Text fontSize="2xl"> Robert Walling </Text>
                    </Flex>

                    <Stack spacing={8} direction='row' align='center'>
                        <NavButton text="Home" section="Home" />
                        <NavButton text="About Me" section="AboutMe" />
                        <NavButton text="Projects" section="Projects" />
                        <NavButton text="Contact Me" section="ContactMe" />
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
