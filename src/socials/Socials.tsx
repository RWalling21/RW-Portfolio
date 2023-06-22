import React from "react";
import { VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialsLink from "./SocialsLink";

const Socials : React.FC = () => {
    return (
        <VStack 
            position="fixed" 
            left="2rem" bottom="2rem" 
            direction="column" 
            spacing={4}
        >
            <SocialsLink 
                href="https://github.com/RWalling21" 
                icon={<FaGithub />} 
                animOrder={0}
            />
            <SocialsLink 
                href="https://www.linkedin.com/in/rwalling/" 
                icon={<FaLinkedin />} 
                animOrder={1}
            />
            <SocialsLink 
                href="mailto:rhw8246@rit.edu" 
                icon={<MdEmail />} 
                animOrder={2}
            />
        </VStack>
    )
}

export default Socials;
