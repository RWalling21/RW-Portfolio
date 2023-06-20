import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
    return (
        <Flex
            bg="navy.background" 
            height="10vh" 
            pr="4rem" pl="4rem"
            justify="center"
            align="flex-end"
            mb="1rem"
        >
            <Text 
                fontSize="md" 
                color="navy.paragraph" 
            > 
                Designed and Engineered by Robert Walling.    
            </Text>
        </Flex>
    )
};

export default Footer;
