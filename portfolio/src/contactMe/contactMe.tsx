import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ContactMe : React.FC = () => {

    // Boring! Let's make this page more interesting.

    return (
        <Flex
            bg="lightBlue.background" 
            minH="75vh" 
            pr="12rem" pl="12rem"
            align="center"
            justify="center"
        >
            <Box textAlign="center" color="lightBlue.paragraph">
                <Text fontSize="5xl" color="elements.headline"> Contact me </Text>

                <Text maxW="40vw" size="lg" fontWeight="bold" mt="1rem"> 
                    I'm always looking for new and exciting projects to work on, please don't hesitate to reach out at rhw8246@rit.edu!  
                </Text>

                <Button
                    bg="navy.button"
                    color="navy.buttonColor"
                    mt="2rem"
                    justifySelf="flex-end"
                > 
                    Email Me     
                </Button>
            </Box>
        </Flex>
    )
}

export default ContactMe;