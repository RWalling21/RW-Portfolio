import React from 'react';
import { Flex, Box, Image, Text, VStack, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box)
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Home : React.FC = () => {
    return (
        <Flex
            bg="navy.background" 
            minH="80vh" 
            pr="12rem" pl="12rem"
            mt="12rem"
            justify="center"
        >
            <VStack 
                align="start"
                spacing={4}
                flex="1"
                maxW="600px"
                mr="2.5rem" mt="2.5rem"
            >
                <MotionText 
                    color="navy.headline" 
                    fontSize="6xl"
                    initial={{ opacity: 0, transform: 'translateY(-200px)' }}
                    animate={{ opacity: 1, transform: 'translateY(0)' }}
                    transition={{ duration: 1 }}
                >
                    Hello! I'm Robert
                </MotionText>

                <MotionText 
                    color="navy.paragraph" 
                    fontSize="2xl"
                    initial={{ opacity: 0, transform: 'translateX(-200px)' }}
                    animate={{ opacity: 1, transform: 'translateX(0)' }}
                    transition={{ duration: 1 }}
                >
                    Full Stack Software Engineer, Musician, and Creative. {/* Somehow make this stick out more */}
                </MotionText>

                <MotionButton 
                    ml="auto" mt="1rem"
                    size="lg"
                    bg="navy.button"
                    variant='contained'
                    _hover={{ bg: "navy.buttonHover" }}
                    initial={{ opacity: 0, transform: 'translateY(200px)' }}
                    animate={{ opacity: 1, transform: 'translateY(0)' }}
                    transition={{ duration: 1 }}
                > 
                    Grab my Resume! 
                </MotionButton>
            </VStack>
            <MotionBox 
                maxW="400px" 
                maxH="400px" 
                flex="2"
                initial={{ opacity: 0, transform: 'scale(0)' }}
                animate={{ opacity: 1, transform: 'scale(1)' }}
                transition={{ duration: 1 }}
            >
                <Image src={`${process.env.PUBLIC_URL}/selfie.jpeg`} maxW="100%" maxH="100%" borderRadius="lg"/>
            </MotionBox>

        </Flex>
    );
};

export default Home;
