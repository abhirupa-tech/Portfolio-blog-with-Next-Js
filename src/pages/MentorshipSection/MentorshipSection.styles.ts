import styled from "styled-components";
import { Button, Container } from "@mui/material";
import { media } from "../index.styles";

export const Root = styled.div`
    margin: auto;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;   
    ${media.tablet} {
        text-align: center;
    }
    ${media.phone} {
        text-align: center;
        width: 100%;        
        margin: 5vh 0vh;
    }
`;

export const MentorshipImage = styled(Container)`
    height: 65vh;
`;

export const MentorshipHeader = styled.div`
    margin-top: 10vh;
    background: linear-gradient(272deg,#3619f2 12.22%,#6b32ae 52.69%,#450185 98.47%);
    /* background-clip: text; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 2px 2px rgba(0,0,0,0.25);
    font-family: 'MontserratHeaderBold';
    font-size: 8vh;
    line-height: 9vh;
    letter-spacing: -3px;
    ${media.tablet} {
        font-size: 4em;
        line-height: 6vh;
    }
    ${media.phone} {
        font-size: 2em;        
        letter-spacing: -2px;
        line-height: 5vh;
        padding: 0vw 10vw;   
    }
`;

export const MentorshipAbout = styled.div`
    color: #000;
    margin-top: 2vh;
    font-family: 'MontserratStandardLight';
    font-size: 2.5vh;
    font-weight: 600;
    letter-spacing: 1.2px;
    ${media.tablet} {
        font-size: 2em;
        line-height: 4vh;
    }
    ${media.phone} {
        font-size: 1em;
        line-height: 3vh;
        text-align: center;
        padding: 2vw 12vw;        
        margin-top: 0vh;
    }
`;

export const MaterialButton = styled.div`
    text-align: center;
    align-content: center;
    color: ghostwhite;
    margin-top: 6vh;
    background: linear-gradient(#f33c6d, #a30d2c);
    border-radius: 20px;
    padding: 10px 20px;
    width: fit-content;    
    font-family: 'MontserratStandardLight';
    font-size: 1.5em;
    font-weight: 600;
    display: inline-block;
    &:hover {
        background: linear-gradient(#eb5e84,#bf3030); !important;
        color: whitesmoke;
        cursor: pointer;
        shadow: 2px;
        transition: all 0.2s ease-in-out;
    }
    ${media.tablet} {
        font-size: 1em;
        font-style: regular;
    }
    ${media.phone} {
        font-size: 0.7em;
        font-style: regular;
    }
`;

export const Image = styled.img`
    height: 50vh;
    display: flex;
    align-items: center;
`;