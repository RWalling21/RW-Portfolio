import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, VStack, Button } from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

// Setting variables for framer-motion
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const textVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const terminalTextVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0 } },
};

function getMotionProps(variants: Variants) {
    return {
        initial: "hidden",
        animate: "visible",
        variants
    };
}

const Home: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const roles = ["Software Engineer", "Musician", "Creative"];
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingInterval: NodeJS.Timeout;
        let cursorInterval: NodeJS.Timeout;

        if (!isDeleting && text === roles[currentIndex]) {
            setTimeout(() => setIsDeleting(true), 1000);
            return;
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        typingInterval = setInterval(() => {
            if (isDeleting) {
                setText(prev => prev.substring(0, prev.length - 1));
            } else {
                setText(prev => prev + roles[currentIndex][prev.length]);
            }
        }, isDeleting ? 100 : 150);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, [currentIndex, text, isDeleting]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 300);
    
        return () => {
            clearInterval(cursorInterval);
        };
    }, []);
    
    
    return (
        <Flex
            bg="navy.background"
            minH="80vh"
            pr="12rem" pl="12rem"
            mt="12rem"
            justify="center"
            position="relative"
        >
            <VStack
                align="start"
                spacing={4}
                flex="1"
                maxW="600px"
                mr="2.5rem" mt="2.5rem"
            >
                <MotionText
                    color="navy.headline"
                    fontSize="6xl"
                    {...getMotionProps(textVariants)}
                >
                    Hello! I'm Robert
                </MotionText>

                <MotionText
                    initial="hidden"
                    animate="visible"
                    exit="visible"
                    variants={terminalTextVariants}
                    color="navy.paragraph"
                    fontSize="3xl"
                >
                    {text}
                    <span style={{ opacity: showCursor ? 1 : 0 }}>_</span>
                </MotionText>

                <MotionButton
                    as="a" href={`${process.env.PUBLIC_URL}/resume.pdf`}
                    target="_blank"
                    ml="auto" mt="1rem"
                    size="lg"
                    bg="navy.button"
                    variant="contained"
                    _hover={{ bg: 'navy.buttonHover' }}
                    whileHover={{ 
                        scale: 1.05,
                        cursor: "pointer", }}
                    transition={{ duration: 0.05 }}
                    {...getMotionProps(buttonVariants)}
                >
                    Grab my Resume!
                </MotionButton>
            </VStack>

            <MotionBox
                w="400px" h="400px"
                borderRadius="lg"
                backgroundSize="cover"
                backgroundImage={`url(${process.env.PUBLIC_URL}/selfie.jpeg)`}
                animate={{
                    boxShadow: [
                        "0 0 5px 2px rgba(9,198,215, 0.6)", 
                        "0 0 10px 3.5px rgba(9,198,215, 0.75)",
                        "0 0 15px 5px rgba(9,198,215, 0.9)",
                        "0 0 10px 3.5px rgba(9,198,215, 0.75)",
                        "0 0 5px 2px rgba(9,198,215, 0.6)"
                    ]
                }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />
        </Flex>
    );
};

export default Home;
