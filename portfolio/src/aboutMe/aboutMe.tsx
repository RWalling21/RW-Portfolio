import React from 'react';
import { Flex, Box, Text, HStack, Image, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Skill from './Skill';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const AboutMe : React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Change the trigger option here
    });

    return (
        <Grid
            templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}}
            templateRows={{base: "repeat(3, auto)", md: "repeat(2, auto)"}} 
            gap={6}
            bg="lightBlue.background" 
            minH="100vh" 
            pr="12rem" pl="12rem"
            justifyContent="center"
        >
            <MotionBox 
                ref={ref}
                gridColumn={{base: "1 / span 1", md: "1 / span 1"}} 
                gridRow={{base: "1 / span 1", md: "1 / span 2"}} 
                maxW = "33vw" 
                mt="4rem"
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
                transition={{ duration: 1.5 }}
            >
                <Text fontSize="5xl" color="lightBlue.headline" textAlign="center" mb="1rem"> Who am I? </Text>
                <Text fontSize="lg" color="lightBlue.paragraph" textAlign="center" maxW="40vw"> 
                    Nostrud duis dolore est irure magna voluptate occaecat duis esse. Do velit eiusmod eu aute anim minim do sint voluptate proident ad. Id irure irure occaecat sit exercitation. Aliquip eu est tempor in minim. Adipisicing consectetur est officia do amet cupidatat.
                </Text>
            </MotionBox>
            
            <MotionFlex 
                gridColumn={{base: "1 / span 1", md: "2 / span 1"}} 
                gridRow="1 / span 1" 
                maxW = "33vw" 
                mt="4rem"
                justifyContent="center"
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
                transition={{ duration: 1.5 }}
            >
                <Image src="" fallbackSrc='https://via.placeholder.com/150' mr="1rem" borderRadius="full" />
            </MotionFlex>

            <MotionFlex 
                gridColumn={{base: "1 / span 1", md: "1 / span 2"}}
                gridRow={{base: "3 / span 1", md: "2 / span 1"}}
                maxW = "33vw" 
                justifySelf="center" 
                direction="column"
                alignItems="center"
                mt="1rem"
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 1.5 }}
            >
                <Text fontSize="5xl" color="lightBlue.headline" textAlign="center" mb="1rem"> Skills </Text>
                <HStack display="flex" flexWrap="wrap" justifyContent="center" spacing={6}>
                    <Skill> Java </Skill>
                    <Skill> Javascript </Skill>
                    <Skill> Typescript </Skill>
                    <Skill> Python </Skill>
                    <Skill> C++ </Skill>
                    <Skill> React </Skill>
                    <Skill> Node.JS </Skill>
                    <Skill> MariaDB </Skill>
                    <Skill> Docker </Skill>
                </HStack>
            </MotionFlex>
        </Grid>
    )
}

export default AboutMe;
