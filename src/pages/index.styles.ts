import AbrilFatface from "../fonts/AbrilFatface-Regular.ttf";
import Montserrat from "../fonts/MontserratAlternates-Light.ttf";
import MontserratStandardLight from "../fonts/Montserrat-ExtraLight.ttf";
import MontserratHeaderBold from "../fonts/Montserrat-Bold.ttf";
import MontserratBlack from "../fonts/Montserrat-Black.ttf";
import { createGlobalStyle } from 'styled-components'
import backgroundImg from "../images/HomePageBackground.png";
import { styled } from '@mui/material/styles';

export const Body = styled('div')(({ theme }) => ({
    maxWidth: '100vw',
    backgroundImage: `url(${backgroundImg})`,
    padding: '0',
    backgroundSize: 'cover', /* This ensures the image covers the entire background */
    backgroundRepeat: 'no-repeat', /* Prevents repetition of the image */
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
  }`;

export const MaterialButton = styled('div')(({ theme }) => ({
  textAlign: 'center',
  alignContent: 'center',
  color: 'ghostwhite',
  marginTop: '6vh',
  background: 'linear-gradient(#082d50, #031a26)',
  borderRadius: '20px',
  padding: '10px 20px',
  width: 'fit-content',
  fontFamily: 'MontserratStandardLight',
  fontSize: '1.5em',
  fontWeight: 600,
  display: 'inline-block',
  '&:hover': {
    background: 'charcoal',
    color: 'whitesmoke',
    cursor: 'pointer',
    shadow: '2px',
    transition: 'all 0.2s ease-in-out',
  },  
  [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
    fontSize: '2.5vh',
    fontWeight: 400,
    marginTop: '8vh', 
    borderRadius: '1.2em',   
    padding: '1.5vh 4vh',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2vh',
    fontWeight: 400,
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