import React, { ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled } from '@mui/system';
import logo from "./r-logo.png";

interface HideOnScrollProps {
  children: ReactElement;
}

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
  fontStyle: 'italic',
  color: '#EDEDED', 
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent', 
  borderBottom: '1px solid #EDEDED', 
});

const StyledButton = styled(Button)({
  color: '#EDEDED', 
  borderColor: '#EDEDED', 
  marginLeft: '1rem', 
});

const LogoImage = styled("img")({
  height: '50px',  // or any size you want
  marginRight: '1rem'
});

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar : React.FC = () => {
    return (
      <HideOnScroll>
        <StyledAppBar position="fixed" elevation={0}>
            <Toolbar>
                <LogoImage src={logo} alt="Logo" />
                <StyledTypography variant="h4">
                    Robert Walling
                </StyledTypography>
                <StyledButton variant="outlined">Home</StyledButton>
                <StyledButton variant="outlined">AboutMe</StyledButton>
                <StyledButton variant="outlined">Projects</StyledButton>
                <StyledButton variant="outlined">Resume</StyledButton>
            </Toolbar>
        </StyledAppBar>
      </HideOnScroll>
  );
}

export default NavBar;
