import React from 'react';
import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const MotionStack = motion(VStack)
const MotionBox = motion(Box)

const Projects : React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const cardVariants = {
        hidden: { opacity: 0, x: 200 },
        show: { 
          opacity: 1, 
          x: 0,
          transition: {
            type: "tween",
            ease: "linear",
            duration: 1,
          }
        }
      };
    
    return (
        <Flex 
            mt="4rem"
            bg="navy.background" 
            minH="100vh" 
            pr="12rem" pl="12rem"
            justify="flex-end"
            overflowX="hidden"
        >
            <MotionBox 
                ref={ref}
                flex="1" 
                color="navy.paragraph" 
                mt="12rem"
                animate={inView ? { opacity: 1, x: 0, transition: { duration: 1 }} : { opacity: 0, x: -200, transition: { duration: 1 }}}
                transition={{ duration: 1 }}
            >
                <Text fontSize="lg">
                    Qui amet do proident ea in minim aliqua ea dolor do qui ea. Ex sint pariatur velit commodo nulla eu consequat. Lorem est eu laboris incididunt reprehenderit adipisicing deserunt consequat laboris laborum. Laboris mollit sint mollit sunt fugiat non labore do minim in aute labore. Cupidatat officia irure anim occaecat culpa. Laborum esse anim quis consequat reprehenderit voluptate ad amet commodo est consectetur. Adipisicing labore ut laboris consectetur laborum cupidatat.
                </Text>
            </MotionBox>
            
            <Box flex="2">
                <Text fontSize="4xl" color="navy.headline" textAlign="center"> Recent Projects </Text>

                <MotionStack 
                    mt="2rem" 
                    spacing={6}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        show: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                staggerChildren: 0.5,
                                duration: 1
                            }
                        }
                    }}
                >
                    <motion.div variants={cardVariants}>
                        <ProjectCard 
                            title="Comix"
                            imageSrc="" 
                            description='Amet ad eu irure velit mollit exercitation irure aliqua consequat.' 
                            skills={["Design Patterns", "Java", "UML", "JUnit"]}
                            githubLink='' 
                        />
                    </motion.div>

                    <motion.div variants={cardVariants}>
                        <ProjectCard 
                            title="Technet" 
                            imageSrc="" 
                            description='Deserunt laborum proident ut nisi consectetur culpa laborum.' 
                            skills={["React", "Typescript", "MariaDB", "PHP"]}
                            githubLink='' 
                        />
                    </motion.div>

                    <motion.div variants={cardVariants}>
                        <ProjectCard 
                            title="Portfolio" 
                            imageSrc="" 
                            description='Deserunt laborum proident ut nisi consectetur culpa laborum.' 
                            skills={["React", "Chakra UI", "TypeScript"]}
                            githubLink='' 
                        />
                    </motion.div>

                </MotionStack>
            </Box>
        </Flex>
    )
}

export default Projects;
