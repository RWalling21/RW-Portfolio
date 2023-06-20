import React from "react";
import { Button, useTheme } from "@chakra-ui/react";

interface NavButtonProps {
    text: string;
}

const NavButton : React.FC<NavButtonProps> = ({ text }) => {
    const theme = useTheme();
    
    return (
        <Button 
            bg="elements.button" 
            color="elements.buttonText"
            size='md'
            variant='contained'
        >
            { text }
        </Button>
    )
}

export default NavButton;