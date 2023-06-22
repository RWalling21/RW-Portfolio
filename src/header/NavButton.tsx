import React from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

interface NavButtonProps {
    text: string;
}

const NavButton : React.FC<NavButtonProps> = ({ text }) => {    
    return (
        <MotionButton 
            as="a"
            bg="navy.button" 
            color="navy.buttonText"
            size='md'
            variant='contained'
            _hover={{ bg: "navy.buttonHover" }}
            whileHover={{ 
                scale: 1.05,
                cursor: "pointer",
            }}
            transition={{ duration: 0.05 }}
        >
            { text }
        </MotionButton>
    )
}

export default NavButton;