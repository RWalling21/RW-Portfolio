import React from "react";
import { Button } from "@chakra-ui/react";

interface NavButtonProps {
    text: string;
}

const NavButton : React.FC<NavButtonProps> = ({ text }) => {    
    return (
        <Button 
            as="a"
            bg="navy.button" 
            color="navy.buttonText"
            size='md'
            variant='contained'
            _hover={{ bg: "navy.buttonHover" }}
        >
            { text }
        </Button>
    )
}

export default NavButton;