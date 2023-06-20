import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects : React.FC = () => {
    return (
        <Flex 
            mt="4rem"
            bg="navy.background" 
            height="150vh" 
            pr="4rem" pl="4rem"
        >
            <Box>
                <Text fontSize="4xl" color="navy.headline"> Projects </Text>

                <VStack>
                    <ProjectCard title="Test123" imageSrc="" description='lorem ipsum' githubLink='' />

                    <ProjectCard title="Test123" imageSrc="" description='lorem ipsum' githubLink='' />
                </VStack>
            </Box>
        </Flex>
    )
}

export default Projects;