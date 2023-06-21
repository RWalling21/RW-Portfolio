import React from 'react';
import { Flex, Box, Image, Text, VStack, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionStack = motion(VStack);
const MotionBox = motion(Box)

const Home : React.FC = () => {
    return (
        <Flex
            bg="navy.background" 
            minH="80vh" 
            pr="12rem" pl="12rem"
            mt="12rem"
            justify="center"
        >
            <MotionStack 
                align="start"
                spacing={4}
                flex="1"
                maxW="600px"
                mr="2.5rem" mt="2.5rem"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Text color="navy.headline" fontSize="5xl">
                    Hello there! I'm Robert
                </Text>

                <Text color="navy.paragraph" fontSize="lg">
                    I'm a second-year Software Engineering student at the Rochester Institute of Technology (RIT).
                    I'm deeply passionate about developing software solutions that make a difference. My technical journey began with Python and has
                    since expanded to a wide range of languages and tools, from JavaScript, Java, and C++ to React, Angular, and NodeJS.
                </Text>

                <Button 
                    ml="auto" mt="1rem"
                    size="lg"
                    bg="navy.button"
                    variant='contained'
                    _hover={{ bg: "navy.buttonHover" }}
                > 
                    Grab my Resume! 
                </Button>
            </MotionStack>

            <MotionBox 
                maxW="400px" 
                maxH="400px" 
                flex="2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={`${process.env.PUBLIC_URL}/selfie.jpeg`} maxW="100%" maxH="100%" borderRadius="lg"/>
            </MotionBox>

        </Flex>
    );
};

export default Home;
