import "./Hero.css"
import React from 'react';
import AboutMe from '../aboutMe/AboutMe';

const Hero : React.FC = () => {
    return (
        <div className="content">
            <AboutMe />
        </div>
    )
}

export default Hero;
