import styled from "styled-components";
import { media } from "../index.styles";

export const Root = styled.div`   
    background: linear-gradient(92deg, #546e7a, 2.51%, #153949  98.2%);
    margin: auto;
    padding: 10vh 5vw;
    ${media.tablet} {
        padding: 2vw 5vw;
    }${media.phone} {
        padding: 2vw 5vw;
        padding: 4vh 10vw;
    }
`;

export const FooterText = styled.div`
    color: white;
    font-family: 'MontserratHeaderBold';
    font-size: 7vh;
    line-height: normal;
    width: 80%;
    margin-top: 5vh;
    ${media.tablet} {
        font-size: 4em;
        line-height: 6vh;
    }
    ${media.phone} {        
        margin-top: 2vh;
        font-size: 2em;        
        letter-spacing: 0px;
        line-height: 5vh;
        padding: 0vw 5vw; 
    }
`;

export const FooterSubtext = styled.div`
    color: #efefef;
    font-family: 'MontserratStandardLight';
    font-size: 2.5vh;
    font-weight: 400;
    letter-spacing: 0px;
    ${media.tablet} {
        font-size: 2em;
        line-height: 4vh;
        padding-top: 5vw;
    }
    ${media.phone} {
        font-size: 1em;
        padding: 2vw 5vw;
        line-height: 2vh;
    }

`;