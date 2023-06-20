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
            justify="flex-end"
        >
            <Box flex="1" color="navy.paragraph" mt="14rem">
                <Text fontSize="lg">
                    Qui amet do proident ea in minim aliqua ea dolor do qui ea. Ex sint pariatur velit commodo nulla eu consequat. Lorem est eu laboris incididunt reprehenderit adipisicing deserunt consequat laboris laborum. Laboris mollit sint mollit sunt fugiat non labore do minim in aute labore. Cupidatat officia irure anim occaecat culpa. Laborum esse anim quis consequat reprehenderit voluptate ad amet commodo est consectetur. Adipisicing labore ut laboris consectetur laborum cupidatat.
                </Text>
            </Box>
            
            <Box flex="2">
                <Text fontSize="4xl" color="navy.headline" textAlign="center"> Projects </Text>

                <VStack mt="2rem" spacing={6}>
                    {/* Shader */}
                    <ProjectCard 
                        title="Test123"
                        imageSrc="" 
                        description='Amet ad eu irure velit mollit exercitation irure aliqua consequat.' 
                        githubLink='' 
                    />

                    {/* Portfolio */}
                    <ProjectCard 
                        title="Test123" 
                        imageSrc="" 
                        description='Deserunt laborum proident ut nisi consectetur culpa laborum.' 
                        githubLink='' 
                    />

                    {/* TechNet */}
                    <ProjectCard 
                        title="Test123" 
                        imageSrc="" 
                        description='Deserunt laborum proident ut nisi consectetur culpa laborum.' 
                        githubLink='' 
                    />

                    {/* More to come */}
                </VStack>
            </Box>
        </Flex>
    )
}

export default Projects;
