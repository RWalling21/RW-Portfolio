import React from 'react';
import { Flex, Box, Text, Button, HStack, Image, Grid } from '@chakra-ui/react';

const AboutMe : React.FC = () => {
    return (
        <Grid
            templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}}
            templateRows={{base: "repeat(3, auto)", md: "repeat(2, auto)"}} 
            gap={6}
            bg="lightBlue.background" 
            minH="100vh" 
            pr="12rem" pl="12rem"
            justifyContent="center"
        >
            <Box 
                gridColumn={{base: "1 / span 1", md: "1 / span 1"}} 
                gridRow={{base: "1 / span 1", md: "1 / span 2"}} 
                maxW = "33vw" 
                mt="4rem"
            >
                <Text fontSize="5xl" color="lightBlue.headline" textAlign="center" mb="1rem"> Who am I? </Text>
                <Text fontSize="lg" color="lightBlue.paragraph" textAlign="center" maxW="40vw"> 
                    Nostrud duis dolore est irure magna voluptate occaecat duis esse. Do velit eiusmod eu aute anim minim do sint voluptate proident ad. Id irure irure occaecat sit exercitation. Aliquip eu est tempor in minim. Adipisicing consectetur est officia do amet cupidatat.
                </Text>
            </Box>
            
            <Flex 
                gridColumn={{base: "1 / span 1", md: "2 / span 1"}} 
                gridRow="1 / span 1" 
                maxW = "33vw" 
                mt="4rem"
                justifyContent="center"
            >
                <Image src="" fallbackSrc='https://via.placeholder.com/150' mr="1rem" borderRadius="full" />
            </Flex>

            <Flex 
                gridColumn={{base: "1 / span 1", md: "1 / span 2"}}
                gridRow={{base: "3 / span 1", md: "2 / span 1"}}
                maxW = "33vw" 
                justifySelf="center" 
                direction="column"
                alignItems="center"
                mt="1rem"
            >
                <Text fontSize="5xl" color="lightBlue.headline" textAlign="center" mb="1rem"> Skills </Text>
                <HStack display="flex" flexWrap="wrap" justifyContent="center" spacing={4}>
                    <Button> Java </Button>
                    <Button> Javascript </Button>
                    <Button> Typescript </Button>
                    <Button> Python </Button>
                    <Button> C++ </Button>
                    <Button> React </Button>
                    <Button> Node.JS </Button>
                    <Button> MariaDB </Button>
                    <Button> Docker </Button>
                </HStack>
            </Flex>
        </Grid>
    )
}

export default AboutMe;
