import { Box, LinearProgress } from "@mui/material";
import styled from "styled-components";
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    progressbarRoot: {
      '& .MuiLinearProgress-root': {
        backgroundColor: 'red',
        width: '70px',
      },
    },
});

export const Root = styled.div`
    width: 40%;
`;

export const Label = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2em;
`;

export const ProgressBarContainer = styled(Box)`
    height: 70px;
`;

export const CustomLinearProgress = styled(LinearProgress)({
    '& .MuiLinearProgress-bar': {
        backgroundColor: 'yellow',
        height: '20px',
    },
    '& .MuiLinearProgress-root': {
        backgroundColor: 'black',
    }
  });