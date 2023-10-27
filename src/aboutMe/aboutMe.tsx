import React from 'react';
import { Box, Text, Image, VStack, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionVStack = motion(VStack);

const AboutMe : React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <HStack
            spacing={12}
            bg="navy.background"
            minH="125vh"
            pr="12rem"
            pl="12rem"
            alignItems="start"
        >
            <MotionVStack
                ref={ref}
                maxW="33vw"
                mt="4rem"
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
                spacing={6}
            >
                <Box>
                    <Text fontSize="5xl" color="navy.headline" textAlign="center" mb="1rem">Who am I?</Text>
                    <Image src={`${process.env.PUBLIC_URL}/close-selfie.jpeg`} borderRadius="full" w="250px" h="250px" alt="Robert Walling" />
                </Box>
                <Box>
                    <Text fontSize="lg" color="navy.paragraph" textAlign="center" maxW="40vw">
                        I'm a third-year Software Engineering student at the Rochester Institute of Technology (RIT).
                        I'm passionate about creating scalable, user-focused solutions to real-world problems. 
                        I'm able to design and implement full-stack applications using best practices and modern design patterns.
                        I'm also a musician, and I love to create music in my free time.
                    </Text>
                </Box>
            </MotionVStack>

            <Box
                maxW="33vw"
                mt="4rem"
                alignItems="center"
            >
                <Text fontSize="5xl" color="navy.paragraph" textAlign="center" mb="1rem"> Skills </Text>

            </Box>
        </HStack>
    )
}

export default AboutMe;
