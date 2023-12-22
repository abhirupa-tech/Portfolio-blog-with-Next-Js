import * as React from "react"
import {DeveloperName, Root, DeveloperAbout, Main, Icon, MaterialButton, IconContainer, IntroductionContainer, IntroductionColumn, DeveloperIntro} from "./homepage.styles";
import { IconGithub, IconLinkedIn, IconGmail, IconInstagram } from '../images/icons';
import { Box, LinearProgress } from "@mui/material";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import BlogCard from "../components/BlogCard/BlogCard";
import { blogItems } from "../utils";
import { BlogContainer } from "./BlogSection/BlogSection.styles";

const IntroductionSection: React.FC<{}> = () => {
  
  return (
    <Root >
      <div>Navbar content goes here</div>
      <IntroductionContainer>
        <IntroductionColumn md={7}>
          <DeveloperIntro>            
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
            
            {/* <ProgressBar label={"Years Of Experience: 2+"} progressValue={20}/>        
            <ProgressBar label={"Projects Worked on: 3+"} progressValue={30}/> */}
            <MaterialButton>Let me Mentor You</MaterialButton>
          </DeveloperIntro>
          
        </IntroductionColumn>
        <IntroductionColumn md={5}> Profile Picture Goes Here</IntroductionColumn>
      </IntroductionContainer>
      <BlogContainer>
          <BlogCard {...blogItems[0]} />          
          <BlogCard {...blogItems[1]} />          
          <BlogCard {...blogItems[2]} />
      </BlogContainer>      
      <MaterialButton>Read More</MaterialButton>
    </Root>
  )
  }

export default IntroductionSection
