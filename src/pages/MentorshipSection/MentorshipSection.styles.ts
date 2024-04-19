import styled from "styled-components";
import { Button, Container } from "@mui/material";
import { media } from "../index.styles";

export const Root = styled.div`
    height: 85vh;
    background-color: #efefef;
`;

export const MentorshipContainer = styled.div`
    margin: auto;
    width: 75%;    
    ${media.tablet} {
        text-align: center;
    }
    ${media.phone} {
        text-align: center;
        width: 85%; 
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
        line-height: 3.5vh;
        text-align: center;
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
    font-family: 'MontserratStandardLight';
    font-size: 2.5vh;
    font-weight: 600;
    width: fit-content;
    display: inline-block;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    letter-spacing:1px;
    &:hover {
        background: linear-gradient(#b10a37,#9f0625);
        color: whitesmoke;
        cursor: pointer;
        shadow: 2px;
        transition: all 0.8s ease-in-out;
    }
`;

export const Image = styled.img`
    height: 50vh;
    display: flex;
    align-items: center;
`;