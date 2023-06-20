import React from 'react';
import { Flex, Box, Image, Text, useTheme, VStack, Button } from '@chakra-ui/react';

const AboutMe: React.FC = () => {
  const theme = useTheme();

  return (
    <Flex
      bg="elements.background" 
      height="75vh" 
      pr="4rem" pl="4rem"
      mt="4rem"
      justify="center"
    >
      <VStack 
        align="start"
        spacing={4}
        flex="1"
        maxW="600px"
        mr="2rem"
      >
        <Text color={theme.colors.elements.button} fontSize="5xl">
          Hello there! I'm Robert
        </Text>

        <Text color={theme.colors.elements.paragraph} fontSize="lg">
          I'm a second-year Software Engineering student at the Rochester Institute of Technology (RIT).
          I'm deeply passionate about developing software solutions that make a difference. My technical journey began with Python and has
          since expanded to a wide range of languages and tools, from JavaScript, Java, and C++ to React, Angular, and NodeJS.
        </Text>

        <Button 
          marginLeft="auto" 
          size="lg"
          bg="elements.button"
          variant='contained'
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

export default AboutMe;
