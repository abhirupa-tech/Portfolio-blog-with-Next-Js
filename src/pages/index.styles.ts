import styled from "styled-components";
import AbrilFatface from "../fonts/AbrilFatface-Regular.ttf";
import Montserrat from "../fonts/MontserratAlternates-Light.ttf";
import MontserratStandardLight from "../fonts/Montserrat-ExtraLight.ttf";
import MontserratHeaderBold from "../fonts/Montserrat-Bold.ttf";
import MontserratBlack from "../fonts/Montserrat-Black.ttf";
import { createGlobalStyle } from 'styled-components'

export const Body = styled.div`
    /* background-image : yellow; */
    // width: 70%;
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
  }
  body {
    background-color: none;
    margin: 0px;
  }`;
