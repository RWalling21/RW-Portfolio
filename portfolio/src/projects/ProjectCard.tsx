import React from "react";
import { Flex, Text, Image, Button, Box, HStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import SkillButton from "./SkillButton";

interface ProjectProps {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  githubLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, imageSrc, description, skills, githubLink }) => {
  return (
    <Flex 
        bg={"lightBlue.cardBackground"} 
        p="5"
        borderRadius="md" 
        shadow="md"
        width="40vw"
        direction="row"
    >
        <Box mr="5">
            <Image 
                src={imageSrc} 
                alt={title} 
                borderRadius="md" 
                objectFit="cover" 
                fallbackSrc='https://via.placeholder.com/125' 
                maxW="125" maxH="125"
            />
        </Box>

        <Box flex="1">
            <Text fontSize="xl" fontWeight="bold" color={"lightBlue.cardHeading"}>
                {title}
            </Text>

            <Text color={"lightBlue.cardParagraph"}>
                {description}
            </Text>
            
            <HStack display="flex" flexWrap="wrap" spacing={2}>
                {skills.map((skill : string) => (
                    <SkillButton key={skill}> {skill} </SkillButton>
                ))}
            </HStack>

            <Button 
                as="a" 
                href={githubLink}
                colorScheme="teal" 
                variant="outline"
                mt="3" 
                rightIcon={<ExternalLinkIcon />} 
            >
                GitHub
            </Button>
        </Box>
    </Flex>
  );
};

export default ProjectCard;
