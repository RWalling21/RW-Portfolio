import React from 'react';
import { Stack, Flex, Text, Button, Image, Box, useColorModeValue } from "@chakra-ui/react";
import NavButton from './NavButton';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { AnimatePresence, motion } from 'framer-motion';
const MotionFlex = motion(Flex);

const Navbar : React.FC = () => {      
    const [scrollY, setScrollY] = React.useState(0);
    const [lastScrollTop, setLastScrollTop] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(true);

    useScrollPosition(({ currPos }) => {
        const isScrollingUp = currPos.y > lastScrollTop;

        setIsVisible(isScrollingUp || currPos.y > -80); 
        setScrollY(currPos.y);
        setLastScrollTop(currPos.y);
    }, [lastScrollTop]);

    const isScrolled = scrollY <= 0; 
    
    return (
        <AnimatePresence>
            {isVisible && (
                <MotionFlex
                    initial={{ y: -125 }}
                    animate={{ y: 0 }}
                    exit={{ y: -125 }}
                    transition={{ type: 'tween', duration: 0.2 }}
                    align="center"
                    justify="space-between"
                    wrap="wrap"
                    pl="4rem" pr="4rem" pt="1rem" pb="1rem"
                    backdropFilter='auto' backdropBlur='lg'
                    bg={isScrolled ? "navy.background" : "transparent"} 
                    color="navy.headline"
                    position="fixed"
                    top="0"
                    zIndex="1"
                    width="full"
                    boxShadow={scrollY < 0 ? "0px 4px 20px rgba(0,0,0,0.1)" : "none"} 
                    opacity={isScrolled ? 0.9 : 1}
                >
                    <Flex align="center">
                        <Image src="" fallbackSrc='https://via.placeholder.com/75' mr="1rem" />
                        <Text fontSize="2xl"> Robert Walling </Text>
                    </Flex>

                    <Stack spacing={8} direction='row' align='center'>
                        <NavButton text="Home" section="Home" />
                        <NavButton text="About Me" section="AboutMe" />
                        <NavButton text="Projects" section="Projects" />
                        <NavButton text="Contact Me" section="ContactMe" />
                        <Button variant="outline" color="navy.button" > Resume </Button>
                    </Stack>
                </MotionFlex>
            )}
        </AnimatePresence>
    );
}
export default Navbar;
