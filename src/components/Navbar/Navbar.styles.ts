import styled from "styled-components";
import { media } from "../../pages/index.styles";

export const Root = styled.div`   
    height: fit-content;
    text-align: center;
    padding: 2vh 0vw;
    font-family: 'Montserrat';
    font-size: 1.4rem;
    color: white;
    background-color: #243d55;
    z-index: 1000;   
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    ${media.tablet} {
        font-size: 1em;
    }    
    ${media.phone} {
        padding: 3vh 0vw;
        font-size: 1em;
    }
`;

export const Navbar = styled.div` 
    height: 10vh;
    background-color: none;
    text-align: center;    
    font-family: 'Montserrat';
    font-size: 1.4rem;
    color: white;
    align-content: center;

    ${media.tablet} {
        font-size: 1em;
        width: 60vw;
    }

    ${media.phone} {
        font-size: 0.7em;
        width: 80vw;
    }
`;
