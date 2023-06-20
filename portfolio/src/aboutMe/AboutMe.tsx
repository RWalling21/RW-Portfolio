import React from 'react';
import { Text, useTheme } from '@chakra-ui/react';

const AboutMe: React.FC = () => {
  const theme = useTheme();

  return (
    <div>
      <Text color={theme.colors.elements.button} fontSize="4xl">
        Hello there! I'm Robert
      </Text>

      <Text color={theme.colors.elements.paragraph} fontSize="md">
        I'm a second-year Software Engineering student at the Rochester Institute of Technology (RIT).
        I'm deeply passionate about developing software solutions that make a difference. My technical journey began with Python and has
        since expanded to a wide range of languages and tools, from JavaScript, Java, and C++ to React, Angular, and NodeJS.
      </Text>

      <Text color={theme.colors.elements.paragraph} fontSize="md">
        Beyond my academic pursuits, I've gained practical experience as a Support Technician at ITS Resnet and led philanthropic initiatives,
        raising over $6,000 for the Make-A-Wish foundation. Additionally, I've embarked on personal projects like creating a Convolutional
        Neural Network and developing 'Song-Master', a creative tool that crafts new songs from existing lyrics. I'm always eager to learn,
        explore new technologies, and take on new challenges. Feel free to reach out to discuss software development, potential collaborations,
        or the latest tech trends!
      </Text>
    </div>
  );
};

export default AboutMe;
