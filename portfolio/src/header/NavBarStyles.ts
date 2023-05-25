import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

export const StyledTypography = styled(Typography)({
  flexGrow: 1,
  fontFamily: "Sans Serif",
  fontStyle: "normal",
  color: '#EDEDED', 
});

export const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent', 
  borderBottom: '1px solid #EDEDED', 
});

export const StyledButton = styled(motion(Button))({
  color: '#EDEDED',
  marginLeft: '1rem',
  '&:hover': {
    color: '#EDEDED',
    fontWeight: 'bold',
  },
});

export const LogoImage = styled("img")({
  height: '45px',
});
