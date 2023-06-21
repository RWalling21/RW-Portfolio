import React from 'react';
import { Flex, Box, Image, Text, VStack, Button } from '@chakra-ui/react';

const Home : React.FC = () => {
  return (
    <Flex
      bg="navy.background" 
      minH="80vh" 
      pr="12rem" pl="12rem"
      mt="12rem"
      justify="center"
    >
      <VStack 
        align="start"
        spacing={4}
        flex="1"
        maxW="600px"
        mr="2.5rem"
        mt="2.5rem"
      >
        <Text color="navy.headline" fontSize="5xl">
          Hello there! I'm Robert
        </Text>

        <Text color="navy.paragraph" fontSize="lg">
          I'm a second-year Software Engineering student at the Rochester Institute of Technology (RIT).
          I'm deeply passionate about developing software solutions that make a difference. My technical journey began with Python and has
          since expanded to a wide range of languages and tools, from JavaScript, Java, and C++ to React, Angular, and NodeJS.
        </Text>

        <Button 
          ml="auto" mt="1rem"
          size="lg"
          bg="navy.button"
          variant='contained'
          _hover={{ bg: "navy.buttonHover" }}
        > 
          Grab my Resume! 
        </Button>
      </VStack>

      <Box maxW="400px" maxH="400px" flex="2">
        <Image fallbackSrc='https://via.placeholder.com/400' maxW="100%" maxH="100%"/>
      </Box>

    </Flex>
  );
};

export default Home;
