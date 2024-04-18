import styled from "styled-components";
import backgroundImg from "../../images/HomePageBackground.png";
import { Col, Row } from "react-grid-system";
import { Grid } from "@mui/material";
import { media } from "../index.styles";
  
export const DeveloperIntro = styled(Col)`
    margin: auto!important;
    width: 30vw;
    padding:0px!important;
    padding:0px!important;    
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;`
;

export const DeveloperName = styled.div`
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'MontserratHeaderBold';
    font-size: 6vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -4px;
    text-align: center;
    width: 100%;
    margin-top: 60px;

    ${media.tablet} {
      font-size: 5em;
    }

    ${media.phone} {
      font-size: 4em;
    }
`;

export const DeveloperAbout = styled.div`
    color: #EFEFEF;
    font-family: 'Montserrat';
    font-size: 1.4vw;
    width: 40vw;
    font-weight: 500;
    letter-spacing: 1.2px;
    display: inline-block;
    text-align: center;

    ${media.tablet} {
        font-size: 1.2em;
        width: 60vw;
    }

    ${media.phone} {
        font-size: 0.8em;
        width: 80vw;
    }
`;

export const ProfilePic = styled.image`
    height: 100%;
`

export const Root = styled.div`
    background-image: 
    url(${backgroundImg});
    padding: 0;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Icon = styled.image`
    padding-right: 20px;
    cursor: pointer;
    &:hover {
        filter: brightness(150%);
        transition: all 0.2s ease-in-out;
    }
    img {
        ${media.tablet} {
            height: 8vw;
            width: auto;
        }
        ${media.phone} {
            height: 14vw;
            width: auto;
        }
        ${media.desktop} {
            height: 4vw;
            width: auto;
        }
    }    
`;

export const IconContainer = styled.image`
    display: flex;
    width: 100%;
    align-content: center;
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
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

export const IntroductionContainer = styled(Grid)`
    margin-left: 5vw!important;    
    margin-right: 5vw!important;
    padding:0px!important;    
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const IntroductionColumn = styled(Col)`
    margin: auto!important;
    padding:0px!important;`
;

export const BlogContainer = styled.div`
    background-color: transparent;
    padding: 0;
    width: 70%;
    margin: 0 auto;
    margin-top: 10vh;
    display: flex;
    flex-wrap: wrap;
`;

export const CustomRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


