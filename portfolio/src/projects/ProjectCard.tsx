import React from "react";
import { Flex, Text, Image, Button, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface ProjectProps {
  title: string;
  imageSrc: string;
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, imageSrc, description, githubLink }) => {
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

            <Button 
                as="a" 
                href={githubLink}
                colorScheme="teal" 
                variant="outline" 
                mt="3" 
                rightIcon={<ExternalLinkIcon />} 
                alignSelf="flex-end"
            >
                GitHub
            </Button>
        </Box>
    </Flex>
  );
};

export default ProjectCard;
