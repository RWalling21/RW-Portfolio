import React from 'react';
import { Box, Text, Image, VStack, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar';

const MotionVStack = motion(VStack);

const AboutMe : React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <HStack
            spacing={12}
            bg="lightBlue.background"
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
                    <Text fontSize="5xl" color="lightBlue.headline" textAlign="center" mb="1rem">Who am I?</Text>
                    <Image src={`${process.env.PUBLIC_URL}/close-selfie.jpeg`} borderRadius="full" maxW="40vw" maxH="40vh" />
                </Box>
                <Box>
                    <Text fontSize="lg" color="lightBlue.paragraph" textAlign="center" maxW="40vw">
                        I'm a second-year Software Engineering student at the Rochester Institute of Technology (RIT).
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
                <Text fontSize="5xl" color="lightBlue.paragraph" textAlign="center" mb="1rem"> Skills </Text>

                <MotionVStack 
                    ref={ref}
                    display="flex" 
                    flexWrap="wrap" 
                    alignItems="center" 
                    spacing={2}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                >
                    <SkillBar skill='Java' proficiency={90} />
                    <SkillBar skill='Javascript' proficiency={90} />
                    <SkillBar skill='React' proficiency={85} />
                    <SkillBar skill='Typescript' proficiency={85} />
                    <SkillBar skill='UML Design' proficiency={80} />
                    <SkillBar skill='Python' proficiency={80} />
                    <SkillBar skill='Angular' proficiency={75} />
                    <SkillBar skill='C++' proficiency={75} />
                    <SkillBar skill='Node.JS' proficiency={75} />
                    <SkillBar skill='MariaDB' proficiency={70} />
                    <SkillBar skill='Docker' proficiency={65} />
                </MotionVStack>
            </Box>
        </HStack>
    )
}

export default AboutMe;
