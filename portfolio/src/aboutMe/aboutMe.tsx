import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';


const AboutMe : React.FC = () => {
    return (
        <Grid 
            templateColumns={{ base: "1fr", md: "1fr 1fr" }} 
            gap={6}
            bg="lightBlue.background" 
            minH="100vh" 
            pr="12rem" pl="12rem"
        >
            <Box maxW="33vw" mt="4rem">
                <Text fontSize="5xl" color="lightBlue.headline" textAlign="center"> Who am I? </Text>
                <Text fontSize="lg" color="lightBlue.paragraph"> Eiusmod ex commodo incididunt enim aliqua ullamco eiusmod anim occaecat dolore anim. Laboris nisi aliqua culpa eu eiusmod Lorem id tempor laborum labore irure occaecat labore. Ea est laborum quis dolor laboris reprehenderit esse ea officia labore et excepteur officia ex. Duis sit consectetur nisi ullamco labore. Laborum velit laboris quis esse ad consequat ipsum excepteur minim nisi officia. </Text>
            </Box>

            <Box maxW = "33vw" mt="4rem">
                <Text fontSize="5xl" color="lightBlue.headline" textAlign="center"> Skills </Text>
                <Text fontSize="lg" color="lightBlue.paragraph"> Eiusmod ex commodo incididunt enim aliqua ullamco eiusmod anim occaecat dolore anim. Laboris nisi aliqua culpa eu eiusmod Lorem id tempor laborum labore irure occaecat labore. Ea est laborum quis dolor laboris reprehenderit esse ea officia labore et excepteur officia ex. Duis sit consectetur nisi ullamco labore. Laborum velit laboris quis esse ad consequat ipsum excepteur minim nisi officia. </Text>
            </Box>
            
            <Grid templateColumns="1fr" width="100%" justifyItems="center">
                <Text fontSize="5xl" color="lightBlue.headline" textAlign="center"> Books that have influenced me </Text>
            </Grid>
        </Grid>
    )
}

export default AboutMe;