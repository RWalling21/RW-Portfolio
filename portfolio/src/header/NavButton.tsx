import React from "react";
import { Button, useTheme } from "@chakra-ui/react";

interface NavButtonProps {
    text: string;
}

const NavButton : React.FC<NavButtonProps> = ({ text }) => {
    const theme = useTheme();
    
    return (
        <Button 
            bg={theme.colors.elements.button} 
            color={theme.colors.elements.buttonText} 
            size='md'
            variant='contained'
        >
            { text }
        </Button>
    )
}

export default NavButton;