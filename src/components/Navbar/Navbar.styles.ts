import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";
import { styled } from "styled-components";

export const Root = styled.div`
    width: 40%;
    padding-top: 20px;
`;

export const NavbarParent = styled(Box)({
    backgroundColor: 'rgba(0,0,0,0.8)',
})

export const NavbarStyled = styled(AppBar)({
    // '> header.MuiPaper-root': {
    //     backgroundColor: 'pink',
    // },
    // fontFamily: 'MontserratBlack',
    // color: 'black',
    // height: '60px',
})
