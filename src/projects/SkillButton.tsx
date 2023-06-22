import React from "react";
import { Button } from "@chakra-ui/react";

const SkillButton: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <Button
            size="sm"
            bg="navy.buttonHover"
            color="navy.buttonText"
            _hover={{ bg: "navy.button", cursor: "default" }}
        > 
            { children }
        </Button>
    )
}

export default SkillButton;