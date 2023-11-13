import { Box, LinearProgress } from "@mui/material";
import styled from "styled-components";

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

export const LinearProgressBar = styled(LinearProgress)`
    height: 10px
`;