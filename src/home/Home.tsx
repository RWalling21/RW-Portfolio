import React from 'react';
import { Flex, Box, Image, Text, VStack, Button } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

// Setting variables for framer-motion
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const textVariants: Variants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};


const Home: React.FC = () => {
    // Will be used to set motion props on components
    function getMotionProps(variants: Variants) {
        return {
          initial: "hidden",
          animate: "visible",
          variants
        };
      }
    
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
                    {...getMotionProps(textVariants)}
                >
                    Hello! I'm Robert
                </MotionText>

                <MotionText
                    color="navy.paragraph"
                    fontSize="2xl"
                    {...getMotionProps(textVariants)}
                >
                    Full Stack Software Engineer, Musician, Creative.
                </MotionText>

                <MotionButton
                    as="a" href={`${process.env.PUBLIC_URL}/resume.pdf`}
                    target="_blank"
                    ml="auto" mt="1rem"
                    size="lg"
                    bg="navy.button"
                    variant="contained"
                    _hover={{ bg: 'navy.buttonHover' }}
                    whileHover={{ 
                        scale: 1.05,
                        cursor: "pointer", }}
                    transition={{ duration: 0.05 }}
                    {...getMotionProps(buttonVariants)}
                >
                    Grab my Resume!
                </MotionButton>
            </VStack>

            <MotionBox
                w="400px" h="400px"
                borderRadius="lg"
                backgroundSize="cover"
                backgroundImage={`url(${process.env.PUBLIC_URL}/selfie.jpeg)`}
                animate={{
                    boxShadow: [
                        "0 0 5px 2px rgba(9,198,215, 0.6)", 
                        "0 0 10px 3.5px rgba(9,198,215, 0.75)",
                        "0 0 15px 5px rgba(9,198,215, 0.9)",
                        "0 0 10px 3.5px rgba(9,198,215, 0.75)",
                        "0 0 5px 2px rgba(9,198,215, 0.6)"
                    ]
                }}
                transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
            />
        </Flex>
    );
};

export default Home;
