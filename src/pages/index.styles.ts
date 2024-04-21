import styled from "styled-components";
import AbrilFatface from "../fonts/AbrilFatface-Regular.ttf";
import Montserrat from "../fonts/MontserratAlternates-Light.ttf";
import MontserratStandardLight from "../fonts/Montserrat-ExtraLight.ttf";
import MontserratHeaderBold from "../fonts/Montserrat-Bold.ttf";
import MontserratBlack from "../fonts/Montserrat-Black.ttf";
import { createGlobalStyle } from 'styled-components'
import backgroundImg from "../images/HomePageBackground.png";

export const Body = styled.div`
    /* background-image : yellow; */
    width: 100vw;
    background-image: 
    url(${backgroundImg});
    padding: 0;
    background-size: cover; /* This ensures the image covers the entire background */
    background-repeat: no-repeat; /* Prevents repetition of the image */
`;

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