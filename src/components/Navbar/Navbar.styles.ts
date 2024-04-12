import { StyleRounded } from "@mui/icons-material";
import { Container } from "@mui/material";
import styled from "styled-components";
import { media } from "../../pages/index.styles";

export const Root = styled.div`   
    height: fit-content;
`;

export const Navbar = styled.div` 
    height: 10vh;   
    background-color: none;
    width: 100%;
    // display: flex;
    text-align: center;    
    font-family: 'Montserrat';
    font-size: 1.4rem;
    color: white;
    // justify-content: center;
    align-content: center;
    // flex-direction: column;

    ${media.tablet} {
        font-size: 1em;
        width: 60vw;
    }

    ${media.phone} {
        font-size: 0.7em;
        width: 80vw;
    }
`;
