import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const SkillBar: React.FC<{ skill: string, proficiency: number }> = ({ skill, proficiency }) => {
    return (
        <Flex w='75vh' align="center">

            {/* Box for Skill naming */}
            <Box w="15vh" bg="navy.button" p="0.5rem">
                <Text color="navy.buttonText" textAlign="center" size="sm">{skill}</Text>
            </Box>

            {/* Full box for proficiency */}
            <Box w="60vh" flex="1" bg='lightBlue.cardBackground' position="relative">
                {/* It might seem weird that I add a -1, it's to keep the bar away from text */}
                <Box w={`${proficiency - 1}%`} h="100%" p="0.5rem" bg='#F1A5B1' position="absolute"/>
                <Text p="0.5rem" textAlign="right">{`${proficiency}%`}</Text>
            </Box>

        </Flex>
    );
};

export default SkillBar;
