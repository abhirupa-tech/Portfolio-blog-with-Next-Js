import styled from "styled-components";
import backgroundImg from "../../images/BackgroundMentorship.png";
import MentorshipImg from "../../images/MentorshipSectionImage.jpg";
import { Button, Container } from "@mui/material";

export const Root = styled.div`
    height: 85vh;
    background-image: url(${backgroundImg});
    background-color: aquamarine;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const MentorshipContainer = styled.div`
    margin: auto;
    width: 75%;    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MentorshipImage = styled(Container)`
    height: 65vh;
    background-image: url(${MentorshipImg});
    background-size: cover;    
    background-repeat: no-repeat;
    border: 3px solid #000;
    position: relative;
    top: 50%;
    transform: translateY(-35%);
`;

export const MentorshipHeader = styled(Container)`
    color: #D4D4D4;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    font-family: 'MontserratBlack';
    font-size: 3.5rem;
    font-weight: 800;
    width: fit-content;
    line-height: 0.1em;
`;

export const MentorshipAbout = styled(Container)`
    font-family: 'MontserratStandardLight';
    font-size: 1.2rem;
    color: antiquewhite;
`;

export const MaterialButton = styled(Button)`
    && {text-align: center;
        align-content: center;
        color: ghostwhite;
        margin-top: 20px;
        background-color: #2E3975;
        font-family: 'MontserratStandardLight';
        border-radius: 10px;
        font-size: 1.0em;
        padding: 5px 20px;
        display: grid;
        text-align: center;
        width: fit-content;
    }
    &:hover {
        background-color: #172364!important;
        color: whitesmoke;
    }
`;