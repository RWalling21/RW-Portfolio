import React from "react";

import { Flex, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialsLink from "./SocialsLink";

const Socials : React.FC = () => {
    return (
        <Flex position="fixed" left="1rem" bottom="1rem" direction="column">
            <SocialsLink href="https://github.com/RWalling21" icon={<FaGithub />} />
            <SocialsLink href="https://www.linkedin.com/in/rwalling/" icon={<FaLinkedin />} />
            <SocialsLink href="mailto:rhw8246@rit.edu" icon={<MdEmail />} />
        </Flex>
    )
}

export default Socials;
