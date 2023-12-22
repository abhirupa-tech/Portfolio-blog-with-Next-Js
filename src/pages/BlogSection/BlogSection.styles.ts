import styled from "styled-components";
// import backgroundImg from "../../images/BlogSectionBackground.png";
import { Button } from "@mui/material";

export const Root = styled.div`
    height: 70vh;
    background-color: #0c0965;
    height: fit-content;
    // background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const BlogContainer = styled.div`
    background-color: transparent;
    padding: 0;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
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