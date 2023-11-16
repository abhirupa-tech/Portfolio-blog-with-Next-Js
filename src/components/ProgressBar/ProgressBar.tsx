import * as React from "react";
import { Root, Label, ProgressBarContainer, useStyles, CustomLinearProgress } from "./ProgressBar.styles";
import LinearProgress from "@mui/material/LinearProgress";

interface ProgressBarData {
    progressValue: number;
    label: string;
}
const ProgressBar: React.FC<ProgressBarData> = ({
    progressValue,
    label,
  }) => {
  
    const [progress, setProgress] = React.useState(0);
    const styledClasses = useStyles();

    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, progressValue);
        });
        }, 500);

        return () => {
        clearInterval(timer);
        };
    }, []);


    return (
        <Root >
        <Label>{label}</Label>
        <ProgressBarContainer sx={{ width: {progressValue} }}>
            <CustomLinearProgress variant="determinate" value={progress} classes={{
                root: styledClasses.progressBarStyle,
            }}/>
        </ProgressBarContainer>
        </Root>
    )
}

export default ProgressBar;
