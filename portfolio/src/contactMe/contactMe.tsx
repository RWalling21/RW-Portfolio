import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ContactMe : React.FC = () => {
    return (
        <Flex
            bg="#eebbc3" 
            height="150vh" 
            pr="4rem" pl="4rem"
        >
            <Box mt="4rem">
                <Text fontSize="4xl" color="elements.headline"> Contact me </Text>
            </Box>
        </Flex>
    )
}

export default ContactMe;