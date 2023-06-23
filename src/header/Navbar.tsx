import React from 'react';
import { Stack, Flex, Text, Button, Image } from "@chakra-ui/react";
import NavButton from './NavButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

import useNavbarAnimate from './useNavbarAnimate';

const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

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
                            w="60px" h="50px" 
                        />
                        <Text fontSize="3xl" color={"navy.highlight"}> Robert Walling </Text>
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

                        <MotionButton 
                            as="a"
                            href={`${process.env.PUBLIC_URL}/resume.pdf`}
                            target="_blank"
                            variant="outline" 
                            color="navy.buttonHover"
                            borderColor="navy.buttonHover"
                            _hover={{ 
                                bg: "navy.button", color: "navy.buttonText", borderColor: "navy.button"
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                cursor: "pointer",
                            }}
                            transition={{ duration: 0.05 }}
                            > 
                            Resume
                        </MotionButton>

                    </Stack>
                </MotionFlex>
            )}
        </AnimatePresence>
    );
}
export default Navbar;
