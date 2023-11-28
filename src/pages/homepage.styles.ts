import styled from "styled-components";
import backgroundImg from "../images/HomePagebackground.png";
import { Button } from "@mui/material";

export const DeveloperName = styled.div`
    color: #D3D3D3;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'MontserratHeaderBold';
    font-size: 6vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -4px;
    margin-top: 20vh;
`;

export const Main = styled.div`
    width: 40vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DeveloperAbout = styled.div`
    color: #EFEFEF;
    font-family: 'Montserrat';
    font-size: 1.4rem;
    zoom: reset;
    width: 100%;
    font-weight: 500;
    letter-spacing: 1.2px;
    text-align: center;
`;

export const Root = styled.div`
    background-image: 
    url(${backgroundImg});
    padding: 0;
    height: 78vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw;
`;

export const Icon = styled.image`
    padding-right: 10px;
    cursor: pointer;
`;

export const IconContainer = styled.image`
    margin-top: 20px;
`;

export const MaterialButton = styled(Button)`
    && {text-align: center;
        align-content: center;
        color: ghostwhite;
        margin-top: 40px;
        background-color: #2E3975;
        font-family: 'MontserratStandardLight';
        border-radius: 20px;
        font-size: 1.0rem;
        padding: 10px 20px;
        width: fit-content;        
        text-align: center;
        align-content: center;
    }
    &:hover {
        background-color: #172364!important;
        color: whitesmoke;
    }
`;


