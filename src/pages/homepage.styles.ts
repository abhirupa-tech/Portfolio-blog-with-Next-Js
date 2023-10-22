import styled from "styled-components";
import backgroundImg from "../images/bgCore.jpg";

const bgFile = "../images/backgroundLight.png";

export const DeveloperName = styled.div`
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    color: #D3D3D3;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'AbrilFatface';
    font-size: 140px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 5px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

export const Main = styled.div`
    width: 40%;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
`;

export const DeveloperAbout = styled.div`
    color: #EFEFEF;
    font-family: 'Montserrat';
    font-size: 30px;
    width: 100%;
    font-style: normal;
    /* font-weight: 400; */
    line-height: normal;
    letter-spacing: 1.4px;
    /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
`;

export const Root = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.7)),
    url(${backgroundImg});
    padding: 0;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;


