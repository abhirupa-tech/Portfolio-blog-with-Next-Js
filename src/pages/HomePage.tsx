import * as React from "react"
import {DeveloperName, Root, DeveloperAbout, Main, Icon, MaterialButton} from "./homepage.styles";
import type { HeadFC, PageProps } from "gatsby"
import AccessAlarmIcon from '@mui/icons-material';
import { IconGithub, IconLinkedIn, IconGmail, IconInstagram } from '../images/icons';
import { Box, LinearProgress } from "@mui/material";

const IntroductionSection: React.FC<{}> = () => {
  const [progress, setProgress] = React.useState(0);

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
      <Main>
        <DeveloperName>
          Abhirupa
        </DeveloperName>
        <DeveloperAbout>
        I Build Products at Microsoft, India. If you do not find me at my computer then I am probably out in
        the mountains or huddled up with a cozy book.
        </DeveloperAbout>
        <span>
          <IconGithub/>
          <IconLinkedIn/>
          <IconInstagram/>
          <IconGmail/>
        </span> <br/>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <br/><br/>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        
        <br/><br/>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <br/><br/>
        <MaterialButton>Let me Mentor You</MaterialButton>
      </Main>
    </Root>
  )
  }

export default IntroductionSection
