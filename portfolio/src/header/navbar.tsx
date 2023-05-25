import React, { ReactElement } from 'react';
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

const NavBar : React.FC = () => {
    return (
      <HideOnScroll>
        <StyledAppBar position="fixed" elevation={0}>
            <Toolbar>
                <LogoImage src={logo} alt="Logo" />
                <StyledTypography variant="h4">
                    Robert Walling
                </StyledTypography>
                {NavBarButtons.map(buttonName => 
                  <StyledButton 
                    variant="text"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disableRipple
                  >
                    {buttonName}
                  </StyledButton>
                )}
            </Toolbar>
        </StyledAppBar>
      </HideOnScroll>
  );
}

export default NavBar;
