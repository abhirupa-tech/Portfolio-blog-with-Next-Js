import { StyleRounded } from "@mui/icons-material";
import styled from "styled-components";
import BlogImage from "../../images/img.jpg";

export const Root = styled.div`   
    flex-basis: 33.33%;
`;

export const Blog = styled.div`
   margin: 20px;   
   border-radius: 20px;
   height: 70vh;   
   background-color: white;
   box-shadow: 10px 10px 15px 0px #00000040;
`;

export const BlogCardHeader = styled.div`
    font-size: 1.9rem;
    font-family: 'MontserratHeaderBold';
    height: 30%;
`;

export const BlogCardContent = styled.div`
    margin-top: 2vh;
    font-family: 'MontserratStandardLight';
    font-size: 1.2rem;
    height: auto;
`;

export const BlogCardImage = styled.div`
    /* background-color: red;     */
    border-radius: 18px 18px 0px 0px;
    height: 30vh;
    background-image: url(${BlogImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BlogCardTags = styled.div`
    background-color: pink;
    margin-top: 20px;
    width: fit-content;
    border-radius: 30px;
    padding: 3px 12px 3px 12px;
    height: 20px;
`;

export const CardContent = styled.div`
    padding: 15px;
`;

