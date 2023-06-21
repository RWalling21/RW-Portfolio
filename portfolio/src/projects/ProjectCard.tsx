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
  return (
    <MotionFlex 
        whileHover={{ 
            scale: 1.05, 
            cursor: "pointer",
            boxShadow: "0px 0px 8px white"
        }}
        transition={{ duration: 0.3 }}
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
            
            <HStack display="flex" flexWrap="wrap" mt="0.5rem" mb="0.5rem" spacing={2}>
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
