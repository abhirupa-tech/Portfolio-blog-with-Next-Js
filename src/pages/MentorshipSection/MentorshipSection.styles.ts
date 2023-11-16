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
    /* display: flex;
    align-items: center;
    justify-content: center; */
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
    line-height: 2px;
    margin-top: 25vh;
`;

export const MentorshipAbout = styled(Container)`
    font-family: 'MontserratStandardLight';
    font-size: 1.2rem;
    color: antiquewhite;
    margin-top: -10px;
`;

export const MaterialButton = styled(Button)`
    && {
        text-align: center;
        color: ghostwhite;
        font-family: 'MontserratStandardLight';
        border-radius: 10px;
        font-size: 1.0em;
        padding: 5px 20px;
        margin-left: 24px;
        display: flex;
        margin-top: 15px;
        justify-content: center;
        align-items: center;
        width: fit-content;
        background-color: #824B3F;
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
    }
    &:hover {
        background-color: #7D473B!important;
        color: whitesmoke;
    }
`;

export const RowCentered = styled.div`
`
export const CenteredButton = styled(Button)`
  display: block;
  /* justify-content: center;
  align-items: center; */
  margin: auto;
`;