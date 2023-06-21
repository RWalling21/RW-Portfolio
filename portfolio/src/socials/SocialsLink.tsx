import React from "react";

import { IconButton, Link } from "@chakra-ui/react";

interface SocialsProps {
    href: string,
    icon: any // The IconType type is not working for some reason
}

const SocialsLink : React.FC<SocialsProps> = ({href, icon}) => {

    // Need to be styled

    return (
        <Link href={href} isExternal>
            <IconButton 
                aria-label="LinkedIn" 
                icon={icon} 
                size="md"
                isRound={true}
                bg="navy.button"
                _hover={{ bg: "navy.buttonHover", boxShadow: "0px 0px 6px white" }}
                borderWidth="1px"
                borderColor="navy.background"
                boxShadow="0px 0px 3px black"
            />
        </Link>
    )
}

export default SocialsLink;