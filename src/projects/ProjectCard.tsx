import React from "react";
import { Flex, Text, Image, HStack, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SkillButton from "./SkillButton";
interface ProjectProps {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  githubLink: string;
}

const MotionFlex = motion(Flex);

const ProjectCard: React.FC<ProjectProps> = ({ title, imageSrc, description, skills, githubLink }) => {
    const variants = {
        hidden: { opacity: 0, x: 200 },
        show: { 
            opacity: 1, 
            x: 0, 
            transition: {
                x: { duration: 1 }, 
                opacity: { duration: 1 }, 
                scale: { duration: 0.3 }, 
            }
        }
    }
  
    return (
        <MotionFlex 
            whileHover={{ 
                scale: 1.05, 
                cursor: "pointer",
                boxShadow: "0px 0px 8px white"
            }}
            variants={variants} 
            initial="hidden" 
            animate="show"
            bg={"lightBlue.cardBackground"} 
            p="5"
            borderRadius="md" 
            shadow="md"
            width="40vw"
            direction="row"
            onClick={() => window.open(githubLink, "_blank")}
        >
        <Flex mr="5">
            <Image 
                src={imageSrc} 
                alt={title} 
                borderRadius="md" 
                objectFit="cover" 
                alignSelf="center"
                fallbackSrc='https://via.placeholder.com/125' 
                maxW="125" maxH="125"
                align="center"
            />
        </Flex>

        <Flex flex="1" direction="column">
            <Text fontSize="xl" fontWeight="bold" color={"lightBlue.cardHeading"}>
                {title}
            </Text>

            <Text color={"lightBlue.cardParagraph"}>
                {description}
            </Text>
            
            <HStack display="flex" flexWrap="wrap" mt="0.5rem" mb="0.5rem" spacing={2} >
                {skills.map((skill : string) => (
                    <SkillButton key={skill}> {skill} </SkillButton>
                ))}
            </HStack>

            <Spacer />
        </Flex>
    </MotionFlex>
  );
};

export default ProjectCard;
