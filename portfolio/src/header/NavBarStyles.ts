import { styled } from '@mui/system';
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
});

export const StyledButton = styled((Button))(() => ({
  color: '#EDEDED',
  marginLeft: '1rem',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.5s',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: '100%',
    height: '2px',
    width: '100%',
    backgroundColor: '#EDEDED',
    transition: 'all 0.5s',
  },
  '&:hover::after': {
    right: 0,
  },
  '&.selected::after': {
    right: 0,
    backgroundColor: 'purple',
  },
}));

export const LogoImage = styled("img")({
  height: '45px',
});
