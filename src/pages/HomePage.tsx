import * as React from "react"
import {DeveloperName, Root, DeveloperAbout, Main, Icon, MaterialButton, IconContainer} from "./homepage.styles";
import { IconGithub, IconLinkedIn, IconGmail, IconInstagram } from '../images/icons';
import { Box, LinearProgress } from "@mui/material";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const IntroductionSection: React.FC<{}> = () => {
  
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
        
        <IconContainer>
          <Icon><IconGithub/></Icon>
          <Icon><IconLinkedIn/></Icon>
          <Icon><IconInstagram/></Icon>
          <Icon><IconGmail/></Icon>
        </IconContainer> 
        
        <ProgressBar/>        
        <ProgressBar/>
        <MaterialButton>Let me Mentor You</MaterialButton>
      </Main>
    </Root>
  )
  }

export default IntroductionSection
