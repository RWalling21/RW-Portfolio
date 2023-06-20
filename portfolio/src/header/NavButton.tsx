import React from "react";
import { Button } from "@chakra-ui/react";

interface NavButtonProps {
    text: string;
    section: string;
}

const NavButton : React.FC<NavButtonProps> = ({ text, section }) => {    
    return (
        <Button 
            as="a"
            href={`#${section}`}
            bg="navy.button" 
            color="navy.buttonText"
            size='md'
            variant='contained'
        >
            { text }
        </Button>
    )
}

export default NavButton;