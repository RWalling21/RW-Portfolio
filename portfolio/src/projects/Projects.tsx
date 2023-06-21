import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects : React.FC = () => {
    
    // Rename to experience? Group together work and projects here?

    return (
        <Flex 
            mt="4rem"
            bg="navy.background" 
            height="125vh" 
            pr="12rem" pl="12rem"
            justify="flex-end"
        >
            <Box flex="1" color="navy.paragraph" mt="12rem">
                <Text fontSize="lg">
                    Qui amet do proident ea in minim aliqua ea dolor do qui ea. Ex sint pariatur velit commodo nulla eu consequat. Lorem est eu laboris incididunt reprehenderit adipisicing deserunt consequat laboris laborum. Laboris mollit sint mollit sunt fugiat non labore do minim in aute labore. Cupidatat officia irure anim occaecat culpa. Laborum esse anim quis consequat reprehenderit voluptate ad amet commodo est consectetur. Adipisicing labore ut laboris consectetur laborum cupidatat.
                </Text>
            </Box>
            
            <Box flex="2">
                <Text fontSize="4xl" color="navy.headline" textAlign="center"> Recent Projects </Text>

                <VStack mt="2rem" spacing={6}>
                    {/* Comix */}
                    <ProjectCard 
                        title="Comix"
                        imageSrc="" 
                        description='Amet ad eu irure velit mollit exercitation irure aliqua consequat.' 
                        skills={["Design Patterns", "Java", "UML", "JUnit"]}
                        githubLink='' 
                    />

                    {/* TechNet */}
                    <ProjectCard 
                        title="Technet" 
                        imageSrc="" 
                        description='Deserunt laborum proident ut nisi consectetur culpa laborum.' 
                        skills={["React", "Typescript", "MariaDB", "PHP"]}
                        githubLink='' 
                    />

                    {/* Portfolio */}
                    <ProjectCard 
                        title="Portfolio" 
                        imageSrc="" 
                        description='Deserunt laborum proident ut nisi consectetur culpa laborum.' 
                        skills={["React", "Chakra UI", "TypeScript"]}
                        githubLink='' 
                    />

                    {/* Shader (Coming soon) */}
                </VStack>
            </Box>
        </Flex>
    )
}

export default Projects;
