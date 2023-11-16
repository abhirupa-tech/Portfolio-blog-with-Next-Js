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
    letter-spacing: 0.2px;
    margin-top: 30vh;
`;

export const Main = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    display: grid;
    text-align: left;
`;

export const DeveloperAbout = styled.div`
    color: #EFEFEF;
    font-family: 'Montserrat';
    font-size: 1.6rem;
    zoom: reset;
    width: 60%;
    font-style: normal;
    /* font-weight: 400; */
    line-height: normal;
    letter-spacing: 1.4px;
    /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
`;

export const Root = styled.div`
    background-image: 
    url(${backgroundImg});
    padding: 0;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
        font-family: 'Arial';
        border-radius: 20px;
        font-size: 20px;
        padding: 10px 20px;
        width: fit-content;
    }
    &:hover {
        background-color: #172364!important;
        color: whitesmoke;
    }
`;


