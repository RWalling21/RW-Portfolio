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
            minH="125vh" 
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
                {/* Needs something here to keep attention */}
                <Text fontSize="lg">
                    Passionate about innovation and driven by a thirst to improve, I am constantly engaged in the 
                    design and development of new projects. Every project that I take on is an opportunity to learn something 
                    new and to grow as a developer. The ever-evolving world of technology demands that developers stay up to date. 
                    I take immense pride in my work and strive to create applications that are a blend of creativity, efficiency, 
                    and user experience. 
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
                                duration: 0.5
                            }
                        }
                    }}
                >
                    <motion.div variants={cardVariants}>
                        <ProjectCard 
                            title="Comix"
                            imageSrc="" 
                            description='Applied Object Oriented Design Patterns to create a Java application that allows users to create and manage a collection of comic books.' 
                            skills={["Design Patterns", "UML", "Java", "OOP"]}
                            githubLink='' 
                        />
                    </motion.div>

                    <motion.div variants={cardVariants}>
                        <ProjectCard 
                            title="Technet" 
                            imageSrc="" 
                            description='Created a React Web App used internally by RIT ITS to manage and track employee details. Connected to REST API to fetch and update data.' 
                            skills={["React", "Typescript", "MariaDB", "PHP", "REST-API", "Playwright"]}
                            githubLink='' 
                        />
                    </motion.div>

                    <motion.div variants={cardVariants}>
                        <ProjectCard 
                            title="Portfolio Website" 
                            imageSrc="" 
                            description='Create a responsive portfolio website using React and Chakra UI. Used Framer Motion to add animations and transitions.' 
                            skills={["React", "Chakra UI", "TypeScript", "Framer-Motion"]}
                            githubLink='' 
                        />
                    </motion.div>

                </MotionStack>
            </Box>
        </Flex>
    )
}

export default Projects;
