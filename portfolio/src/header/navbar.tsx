import React, { ReactElement, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import logo from "./logo.png";

import { StyledTypography, StyledAppBar, StyledButton, LogoImage } from './NavBarStyles'

interface HideOnScrollProps {
  children: ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBarButtons = ['Home', 'AboutMe', 'Projects', 'Resume'];

const NavBar: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <HideOnScroll>
      <StyledAppBar position="fixed" elevation={0}>
        <Toolbar>
          <LogoImage src={logo} alt="Logo" />
          <StyledTypography variant="h4">
            Robert Walling
          </StyledTypography>
          {NavBarButtons.map((buttonName, index) => (
            <StyledButton
              key={index}
              variant="text"
              disableRipple
              onClick={() => handleButtonClick(index)}
              className={selectedButton === index ? 'selected' : ''}
            >
              {buttonName}
            </StyledButton>
          ))}
        </Toolbar>
      </StyledAppBar>
    </HideOnScroll>
  );
}

export default NavBar;
