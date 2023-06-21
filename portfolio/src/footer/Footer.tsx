import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
    return (
        <Flex
            bg="navy.background" 
            height="10vh" 
            pr="12rem" pl="12rem"
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

            {/* Add Links to relevant social media */}
        </Flex>
    )
};

export default Footer;
