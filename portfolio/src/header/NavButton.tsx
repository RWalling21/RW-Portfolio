import React from "react";
import { Button, useTheme } from "@chakra-ui/react";

interface NavButtonProps {
    children: React.ReactNode;
}

const NavButton : React.FC<NavButtonProps> = ({ children }) => {
    const theme = useTheme();
    
    return (
        <Button 
            bg={theme.colors.elements.button} 
            color={theme.colors.elements.buttonText} 
            size='md'
            variant='contained'
        >
            { children }
        </Button>
    )
}

export default NavButton;