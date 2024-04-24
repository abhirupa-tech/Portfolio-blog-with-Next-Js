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
        font-size: 1.32em;      
        letter-spacing: 0px;
        line-height: 5vh;
        padding: 0vw 4vw;
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
        padding: 2vw 4vw;
        font-size: 0.9em;
        line-height: 3vh;      
        margin-top: 0vh;
    }

`;