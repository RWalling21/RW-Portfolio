import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects : React.FC = () => {
    return (
        <Flex 
            mt="4rem"
            bg="navy.background" 
            height="125vh" 
            pr="4rem" pl="4rem"
        >
            <Box>
                <Text fontSize="4xl" color="navy.headline"> Projects </Text>

                <VStack>
                    <ProjectCard 
                        title="Test123"
                        imageSrc="" 
                        description='Amet ad eu irure velit mollit exercitation irure aliqua consequat.' 
                        githubLink='' 
                    />
                    
                    <ProjectCard 
                        title="Test123" 
                        imageSrc="" 
                        description='Deserunt laborum proident ut nisi consectetur culpa laborum.' 
                        githubLink='' 
                    />
                </VStack>
            </Box>
        </Flex>
    )
}

export default Projects;
