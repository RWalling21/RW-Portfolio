import React from "react";
import { Button } from "@chakra-ui/react";

interface NavButtonProps {
    text: string;
}

const NavButton : React.FC<NavButtonProps> = ({ text }) => {    
    return (
        <Button 
            as="a"
            href={`#${text}`}
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