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
            <IconButton aria-label="LinkedIn" icon={icon} />
        </Link>
    )
}

export default SocialsLink;