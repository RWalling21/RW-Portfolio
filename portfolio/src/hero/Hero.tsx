import React from 'react';
import backgroundImage from './herobg.png'; 
import AboutMe from '../aboutMe/AboutMe';

const Hero : React.FC = () => {
    const heroStyle = {
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff"
    };

    return (
        <div style={heroStyle}>
            <AboutMe />
        </div>
    )
}

export default Hero;
