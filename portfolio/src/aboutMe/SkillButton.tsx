import React from "react";
import { Button } from "@chakra-ui/react";

const SkillButton: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <Button
            size="md"
            bg="navy.button"
            color="navy.background"
            borderColor={ "navy.background" }
            borderWidth="1px"
            _hover={{ bg: "navy.buttonHover", cursor: "default" }}
        > 
            { children }
        </Button>
    )
}

export default SkillButton;