import { StyleRounded } from "@mui/icons-material";
import styled from "styled-components";

export const Root = styled.div`
    background-color: white;
    border-radius: 20px;
    height: 70vh;
`;

export const BlogCardHeader = styled.div`
    /* background-color: purple; */
    font-size: 1.9rem;
    height: 30%;
`;

export const BlogCardContent = styled.div`
    /* background-color: yellow;         */
    margin-top: 2vh;
    font-family: 'Montserrat';
    font-size: 1.3rem;
    height: auto;
`;

export const BlogCardImage = styled.div`
    background-color: red;
    height: 30vh;
`;

export const BlogCardTags = styled.div`
    background-color: pink;
    margin-top: 20px;;
    /* border-radius: inherit; */
    width: fit-content;
    border-radius: 30px;
    padding: 3px 12px 3px 12px;
    height: 20px
`;

