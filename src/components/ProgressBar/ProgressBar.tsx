import * as React from "react";
import { Root, Label, ProgressBarContainer, useStyles, CustomLinearProgress } from "./ProgressBar.styles";

const ProgressBar: React.FC<{
  progressValue? : number,
  label? : string,
}> = () => {
  
    const [progress, setProgress] = React.useState(0);
    const styledClasses = useStyles();

    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 60);
        });
        }, 500);

        return () => {
        clearInterval(timer);
        };
    }, []);


    return (
        <Root >
        <Label>A temporary Label</Label>
        <ProgressBarContainer sx={{ width: "100%" }}>
            <CustomLinearProgress variant="determinate" value={progress}/>
        </ProgressBarContainer>
        <div>
    </div>
        </Root>
    )
}

export default ProgressBar;
