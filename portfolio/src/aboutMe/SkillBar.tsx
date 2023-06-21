import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const SkillBar: React.FC<{ skill: string, proficiency: number }> = ({ skill, proficiency }) => {
    return (
        <Flex w='75vh' align="center" borderColor="navy.background" borderWidth="1px">

            {/* Box for Skill naming */}
            <Box w="15vh" bg="navy.background" p="0.5rem">
                <Text color="white" textAlign="center" size="sm">{skill}</Text>
            </Box>

            {/* Full box for proficiency */}
            <Box w="60vh" flex="1" bg='lightBlue.cardBackground' position="relative">
                <Box w={`${proficiency}%`} h="100%" p="0.5rem" bg='navy.button' position="absolute"/>
                <Text p="0.5rem" textAlign="right">{`${proficiency}%`}</Text>
            </Box>

        </Flex>
    );
};

export default SkillBar;
