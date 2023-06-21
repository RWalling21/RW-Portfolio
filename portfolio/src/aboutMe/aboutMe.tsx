import React from 'react';
import { Box, Text, Image, VStack, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);

const AboutMe : React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <HStack
            spacing={6}
            bg="lightBlue.background"
            minH="125vh"
            pr="12rem"
            pl="12rem"
            alignItems="start"
            justifyContent="center"
        >
            <MotionVStack
                ref={ref}
                maxW="33vw"
                mt="4rem"
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
                transition={{ duration: 1.5 }}
                spacing={6}
            >
                <Box>
                    <Text fontSize="5xl" color="lightBlue.headline" textAlign="center" mb="1rem">Who am I?</Text>
                    <Image src={`${process.env.PUBLIC_URL}/close-selfie.jpeg`} borderRadius="full" maxW="40vw" maxH="40vh" />
                </Box>
                <Box>
                    <Text fontSize="lg" color="lightBlue.paragraph" textAlign="center" maxW="40vw">
                        I'm a second-year Software Engineering student at the Rochester Institute of Technology (RIT).
                        I'm deeply passionate about developing software solutions that make a difference. My technical journey began with Python and has
                        since expanded to a wide range of languages and tools, from JavaScript, Java, and C++ to React, Angular, and NodeJS.
                    </Text>
                </Box>
            </MotionVStack>

            <MotionBox
                maxW="33vw"
                mt="4rem"
                direction="column"
                alignItems="center"
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 1.5 }}
                spacing={4}
            >
                <Text fontSize="5xl" color="lightBlue.headline" textAlign="center" mb="1rem">Skills</Text>

                <VStack display="flex" flexWrap="wrap" alignItems="center" spacing={1}>
                    <SkillBar skill='Java' proficiency={85} />
                    <SkillBar skill='Javascript' proficiency={75} />
                    <SkillBar skill='Typescript' proficiency={70} />
                    <SkillBar skill='Python' proficiency={90} />
                    <SkillBar skill='C++' proficiency={80} />
                    <SkillBar skill='React' proficiency={75} />
                    <SkillBar skill='Node.JS' proficiency={80} />
                    <SkillBar skill='MariaDB' proficiency={70} />
                    <SkillBar skill='Docker' proficiency={65} />
                </VStack>
            </MotionBox>
        </HStack>
    )
}

export default AboutMe;
