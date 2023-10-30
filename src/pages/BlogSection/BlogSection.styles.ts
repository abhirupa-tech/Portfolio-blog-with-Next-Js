import styled from "styled-components";
import backgroundImg from "../images/bgCore.jpg";
import { Button } from "@mui/material";

export const Root = styled.div`
    background-color: black;
    padding: 0;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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



