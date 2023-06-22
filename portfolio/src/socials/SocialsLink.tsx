import React from "react";

import { IconButton, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SocialsProps {
    href: string,
    icon: any, // The IconType type is not working for some reason
    animOrder: number
}

const MotionButton = motion(IconButton);

const SocialsLink : React.FC<SocialsProps> = ({href, icon, animOrder}) => {
    return (
        <Link href={href} isExternal>
            <MotionButton 
                aria-label="LinkedIn" 
                icon={icon} 
                size="md"
                isRound={true}
                bg="navy.button"
                _hover={{ bg: "navy.buttonHover", boxShadow: "0px 0px 5px white" }}
                borderWidth="1px"
                borderColor="navy.background"
                boxShadow="0px 0px 3px black"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * animOrder }}
            />
        </Link>
    )
}

export default SocialsLink;