import AbrilFatface from "../fonts/AbrilFatface-Regular.ttf";
import Montserrat from "../fonts/MontserratAlternates-Light.ttf";
import MontserratStandardLight from "../fonts/Montserrat-ExtraLight.ttf";
import MontserratHeaderBold from "../fonts/Montserrat-Bold.ttf";
import MontserratBlack from "../fonts/Montserrat-Black.ttf";
import MontserratRegular from "../fonts/Montserrat-Regular.ttf";
import { createGlobalStyle } from 'styled-components'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Body = styled('div')(({ theme }) => ({
  maxWidth: '100vw',
  backgroundColor: '#F6F6F6',
  padding: '0',
}));

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AbrilFatface';
    src: url(${AbrilFatface}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('truetype');
  }
  @font-face {
    font-family: 'MontserratStandardLight';
    src: url(${MontserratStandardLight}) format('truetype');
  }
  @font-face {
    font-family: 'MontserratHeaderBold';
    src: url(${MontserratHeaderBold}) format('truetype');
  }
  @font-face {
    font-family: 'MontserratBlack';
    src: url(${MontserratBlack}) format('truetype');
  }
  @font-face {
    font-family: 'MontserratRegular';
    src: url(${MontserratRegular}) format('truetype');
  }`;

export const MaterialButton = styled(Button)(({ theme }) => ({
  textAlign: 'center',
  alignContent: 'center',
  color: 'black',
  margin: '10px 0px',
  background: '#D8D2C4',
  borderRadius: '25px',
  padding: '6px 12px',
  width: 'fit-content',
  fontFamily: 'MontserratStandardLight',
  fontSize: '13px',
  fontWeight: 600,
  display: 'inline-block',
  '&:hover': {
    background:'#cdbe9d',
    color: 'black',
    cursor: 'pointer',
    shadow: '2px',
    transition: 'all 0.2s ease-in-out',
  },  
  [theme.breakpoints.up('sm') && theme.breakpoints.down('md')]: {
    fontSize: '2.5vh',
    fontWeight: 400,
    marginTop: '8vh', 
    borderRadius: '1.2em',   
    padding: '1.5vh 4vh',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5vh',
    fontWeight: 400,
    marginTop: '2vh',    
    padding: '10px 18px',
  },
}));

// Define breakpoints for different screen sizes
export const sizes = {
  desktop: '1030px',
  tablet: '550px',
  phone: '576px',
};

// Create media templates
export const media = {
  desktop: `@media (min-width: ${sizes.desktop})`,
  tablet: `@media (min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop})`,
  phone: `@media (max-width: ${sizes.phone})`,
};