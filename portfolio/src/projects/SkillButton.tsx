import React from "react";
import { Button } from "@chakra-ui/react";

const SkillButton: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <Button
            size="sm"
        > 
            { children }
        </Button>
    )
}

export default SkillButton;