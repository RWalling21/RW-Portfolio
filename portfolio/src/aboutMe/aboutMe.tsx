import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';

const AboutMe : React.FC = () => {
    return (
        <Flex
            bg="lightBlue.background" 
            height="125vh" 
            pr="4rem" pl="4rem"
        >
            <Box mt="4rem">
                <Text fontSize="4xl" color="lightBlue.headline"> About Me </Text>

                <Text fontSize="xl"> Experience </Text>
    
                <Text fontSize="xl"> Books that have influenced me </Text>

                <Text fontSize="xl"> Relevant Coursework </Text>
            </Box>
        </Flex>
    )
}

export default AboutMe;