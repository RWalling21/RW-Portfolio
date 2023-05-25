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
  borderBottom: '1px solid #EDEDED', 
});

export const StyledButton = styled(Button)({
  color: '#EDEDED', 
  borderColor: '#EDEDED', 
  marginLeft: '1rem', 
});

export const LogoImage = styled("img")({
  height: '50px',
  marginRight: '1rem'
});
