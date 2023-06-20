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
                {/* 
                    Simple bulleted list of some places I've worked 
                    Add some interesting geometry to the background
                */}
    
                <Text fontSize="xl"> Books that have influenced me </Text>
                {/* 
                    I want a carocel that swipes through the books, or a custom 
                    component that looks like a book, flipping pages
                */}

                <Text fontSize="xl"> Relevant Coursework </Text>
                {/* 
                    Some of the most relevant courses I have taken and what I learned
                    261 (Web API Development)
                    262 (Design Patterns)
                    256 (Project Management and Managenent patterns)
                    Calc, Linear Algebra, Discrete Math
                */}
            </Box>
        </Flex>
    )
}

export default AboutMe;