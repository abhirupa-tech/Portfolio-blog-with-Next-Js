import { Box, LinearProgress } from "@mui/material";
import styled from "styled-components";
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    progressBarStyle: {
        "&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)": {
            backgroundColor: "#545452",
            height: "14px",
            borderRadius: "10px",
            width: "40vw",
          },
        //   "& .MuiLinearProgress-colorPrimary": {
        //     backgroundColor: "black"
        //   },
        "& .MuiLinearProgress-barColorPrimary": {
        backgroundColor: "#DB9E00"
        },
    },
  });

export const Root = styled.div`
    width: 40%;
    padding-top: 20px;
`;

export const Label = styled.div`
    font-family: 'MontserratStandardLight';
    font-size: 1.0em;
    color: antiquewhite;
    font-weight: 600;
`;

export const ProgressBarContainer = styled(Box)`
    padding-top: 5px;
`;

export const CustomLinearProgress = styled(LinearProgress)({
    // '> span.MuiLinearProgress-root': {
    //     backgroundColor: 'black',
    //     width: '70px',
    // },
    //   '& span.MuiLinearProgress-bar': {
    //     backgroundColor: 'red',
    // },
  });