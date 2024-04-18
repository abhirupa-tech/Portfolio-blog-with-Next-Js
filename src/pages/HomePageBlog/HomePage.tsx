import * as React from "react"
import {DeveloperName, BlogContainer, Root, DeveloperAbout, Icon, MaterialButton, IconContainer, IntroductionColumn, DeveloperIntro, CustomRow} from "./homepage.styles";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogItems } from "../../utils";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePicture from "../../images/ProfilePicture.png";

import GithubIcon from "../../images/icons/githubIcon.png";
import InstagramIcon from "../../images/icons/instagramIcon.png";
import MailIcon from "../../images/icons/emailIcon.png";
import LinkedInIcon from "../../images/icons/linkedInIcon.png";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";

const IntroductionSection: React.FC<{}> = () => {

  const IntroductionContainer = styled(Box)(({ theme }) => ({
    marginLeft: '5vw',
    marginRight: '5vw',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlignLast: 'center',    
  }));
  
  return (
    <Root >
      {/* Navbar Section */}
      <Navbar/>

      {/* Introduction Section */}
      <Grid container style={{ marginTop: "10vh" }}>
        <Grid xs={12} md={8}>
          <DeveloperIntro>            
            <DeveloperName> Abhirupa </DeveloperName>            
            <DeveloperAbout>
                I Build Products at Microsoft, India. If you do not find me at my computer then I am probably out in
                the mountains or huddled up with a cozy book.
            </DeveloperAbout>
            
            <IconContainer>
              <Icon><img src={GithubIcon} alt="Image"/></Icon>
              <Icon><img src={InstagramIcon} alt="Image"/></Icon>
              <Icon><img src={LinkedInIcon} alt="Image"/></Icon>
              <Icon><img src={MailIcon} alt="Image"/></Icon>
            </IconContainer> 
            <MaterialButton>Let me Mentor You</MaterialButton>
          </DeveloperIntro>
        </Grid>
        <Grid xs={12} md={4}>
          {/* <img src={ProfilePicture} height="500px" alt="Image" /> */}
        </Grid>
      </Grid>

      {/* Blog Section */}
      <BlogContainer>
          <BlogCard {...blogItems[0]} />          
          <BlogCard {...blogItems[1]} />          
          <BlogCard {...blogItems[2]} />
      </BlogContainer>

      {/* Redirect User to your Medium Website Page       */}
      <CustomRow>
        <MaterialButton>Read Some More</MaterialButton>
      </CustomRow>
    </Root>
  )
}

export default IntroductionSection
