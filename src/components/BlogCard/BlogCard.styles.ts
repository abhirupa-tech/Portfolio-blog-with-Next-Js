import { StyleRounded } from "@mui/icons-material";
import styled from "styled-components";
import BlogImage from "../../images/blog3img.jpg";
import { Button } from "@mui/material";
import { media } from "../../pages/index.styles";

export const Root = styled.div`   
    flex-basis: 33.33%;
`;

export const Blog = styled.div`
   margin: 30px;   
   border-radius: 20px;
   height: 60vh;
   position: relative; 
   background-color: white;
   box-shadow: 10px 10px 15px 0px #00000040;
   display: flex;
   flex-direction: column;
   ${media.tablet} {
        margin: 10px;
        height: 40vh;
    }
    ${media.phone} {
        margin-left: 10vw;
        margin-right: 10vw;
        margin-top: 0vw;
        margin-bottom: 2vw;
        height: fit-content;
    }
`;

export const BlogCardHeader = styled.div`
    font-size: 2.8vh;
    font-family: 'MontserratHeaderBold';     
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    ${media.tablet} {
        margin: 10px;
        height: 40vh;
    }
    ${media.phone} {
        font-size: 1.5em;
        line-height: 3vh;
    }
`;

export const BlogCardContent = styled.div`
    margin-top: 2vh;
    font-family: 'MontserratStandardLight';
    font-size: 1.85vh;
    font-weight:600;
    letter-spacing:1px;
    flex-grow: 1;    
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    
    ${media.tablet} {
        margin: 10px;
        height: 40vh;
    }
    ${media.phone} {
        margin-top: 1vh;
        font-size: 1em;
        line-height: 3vh;
    }
`;

export const BlogCardImage = styled.div`
    border-radius: 18px 18px 0px 0px;
    height: 30vh;
    order: -1;
      display: block;
    background-image: url(${BlogImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BlogCardTag = styled.div`
    background-color: pink;
    font-family: 'MontserratStandardlight';
    margin-top: 20px;
    width: fit-content;
    border-radius: 5px;
    padding: 3px 12px 3px 12px;
    height: 20px;
`;

export const CardContent = styled.div`
    margin: 4vh;
    flex-grow:1;
`;

export const CardAction = styled(Button)`
    padding: 0px!important;
    margin-top: 1vh!important;
    ${media.phone} {
        margin-bottom: 3vh;
    }
`;
