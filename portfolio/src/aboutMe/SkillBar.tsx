import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const SkillBar: React.FC<{ skill: string, proficiency: number }> = ({ skill, proficiency }) => {
    const barColor = proficiency > 75 ? 'green.500' : proficiency > 50 ? 'yellow.500' : 'red.500';

    return (
        <Box w='100%' p={2}>
            <Text>{skill}</Text>
            <Box w='100%' h='20px' bg='gray.200' mt={1}>
                <Box w={`${proficiency}%`} h='100%' bg={barColor} />
            </Box>
        </Box>
    );
};

export default SkillBar;
