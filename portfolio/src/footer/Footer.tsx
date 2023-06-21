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
                textAlign="center"
            > 
                Designed and Engineered by Robert Walling. <br/>
                rhw8246@rit.edu
            </Text>
        </Flex>
    )
};

export default Footer;
