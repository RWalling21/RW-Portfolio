import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ContactMe : React.FC = () => {
    return (
        <Flex
            bg="#eebbc3" 
            height="125vh" 
            pr="4rem" pl="4rem"
        >
            <Box mt="4rem">
                <Text fontSize="4xl" color="elements.headline"> Contact me </Text>

                <Text> I'm always looking for new and exciting projects to work on, please don't hesitate to reach out! </Text>

                <Text> 
                    Email: Rhw8246@rit.edu
                </Text>

                <Text>
                    Phone: (860) 391 - 7323
                </Text>

                <Button> Email Me </Button>
            </Box>
        </Flex>
    )
}

export default ContactMe;