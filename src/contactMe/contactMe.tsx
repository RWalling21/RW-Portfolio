import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const ContactMe : React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Change the trigger option here
    });

    return (
        <Flex
            bg="navy.background" 
            minH="75vh" 
            pr="12rem" pl="12rem"
            align="center"
            justify="center"
        >
            <MotionBox 
                ref={ref}
                textAlign="center" 
                color="navy.paragraph"
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Text fontSize="5xl" color="elements.headline"> Contact me </Text>

                <Text maxW="40vw" size="lg" fontWeight="bold" mt="1rem"> 
                    I'm always looking for new and exciting projects to work on, please don't hesitate to reach out at rhw8246@rit.edu!  
                </Text>

                <MotionButton
                    bg="navy.button"
                    color="navy.buttonColor"
                    mt="2rem"
                    justifySelf="flex-end"
                    _hover={{ bg: "navy.buttonHover" }}
                    borderWidth="1px"
                    borderColor={"navy.background"}
                    onClick={() => window.location.href = "mailto:rhw8246@rit.edu"}
                    whileHover={{ 
                        scale: 1.05,
                        cursor: "pointer",
                    }}
                    transition={{ duration: 0.05 }}
                > 
                    Email Me     
                </MotionButton>
            </MotionBox>
        </Flex>
    )
}

export default ContactMe;