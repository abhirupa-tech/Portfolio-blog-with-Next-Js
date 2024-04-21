import * as React from "react"
import {DeveloperName, BlogContainer, Root, DeveloperAbout, Icon, MaterialButton, IconContainer, IntroductionColumn, DeveloperIntro, CustomRow, StyledImage, ProfileHeadShot} from "./homepage.styles";
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
import { styled, useTheme } from '@mui/material/styles';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, useMediaQuery } from "@mui/material";
import { media } from "../index.styles";

const IntroductionSection: React.FC<{}> = () => {
  
  // Inside your component:
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Root >
      {/* Navbar Section */}
      <Navbar/>

      {/* Introduction Section */}
      <Grid container>
        {isMobile && <ProfileHeadShot xs={12} md={5}>
          <StyledImage src={ProfilePicture} alt="Profile Picture" />
        </ProfileHeadShot> }
        <Grid xs={12} md={7}>
          <DeveloperIntro>            
            <DeveloperName> Abhirupa </DeveloperName>            
            <DeveloperAbout>
                I Build Products at Microsoft, India. If you do not find me at my computer then I am probably out in
                the mountains or huddled up with a cozy book.
            </DeveloperAbout>
            
            <IconContainer>
              <Icon src={GithubIcon} alt="Image"/>
              <Icon src={InstagramIcon} alt="Image"/>
              <Icon src={LinkedInIcon} alt="Image"/>
              <Icon src={MailIcon} alt="Image"/>
            </IconContainer> 
            <MaterialButton>Let me Mentor You</MaterialButton>
          </DeveloperIntro>
        </Grid>
                
        {!isMobile && <ProfileHeadShot xs={12} md={5}>
          <StyledImage src={ProfilePicture} alt="Profile Picture" />
        </ProfileHeadShot> }
      </Grid>

      {/* Blog Section */}
      
      <BlogContainer>
        <Grid container style={{ padding: "0px" }}>
          <Grid xs={12} md={4}>          
            <BlogCard {...blogItems[0]} /> 
          </Grid>
          <Grid xs={12} md={4}>
            <BlogCard {...blogItems[1]} />  
          </Grid>
          <Grid xs={12} md={4}>
            <BlogCard {...blogItems[2]} />
          </Grid>
        </Grid>
      </BlogContainer>

      {/* Redirect User to your Medium Website Page       */}
      <CustomRow>
        <MaterialButton>Read Some More</MaterialButton>
      </CustomRow>
    </Root>
  )
}

export default IntroductionSection
