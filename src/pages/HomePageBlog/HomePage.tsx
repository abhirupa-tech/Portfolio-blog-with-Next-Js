import * as React from "react"
import {DeveloperName, BlogContainer, Root, DeveloperAbout, Icon, IconContainer, DeveloperIntro, CustomRow, StyledImage, ProfileHeadShotMobile, ProfileHeadShotDefault, homePageGridStyles} from "./homepage.styles";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogItems } from "../../utils";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePicture from "../../images/ProfilePicture.png";

import GithubIcon from "../../images/icons/githubIcon.png";
import InstagramIcon from "../../images/icons/instagramIcon.png";
import MailIcon from "../../images/icons/emailIcon.png";
import LinkedInIcon from "../../images/icons/linkedInIcon.png";
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";
import { MaterialButton } from "../index.styles";

const IntroductionSection: React.FC<{}> = () => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) 
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobileOrTablet = isMobile || isTablet
  return (
    <Root >
      {/* Navbar Section */}
      <Navbar/>

      {/* Introduction Section */}
      <Grid container sx={{...homePageGridStyles(theme)}}>
        {isMobileOrTablet && <ProfileHeadShotMobile xs={12} md={6} lg={5}>
          <StyledImage src={ProfilePicture} alt="Profile Picture" />
        </ProfileHeadShotMobile> }
        {!isMobileOrTablet && <Grid xs={0} md={0} lg={1}/>}
        <Grid xs={12} md={6}>
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
                
        {!isMobileOrTablet && <ProfileHeadShotDefault xs={12} md={5}>
          <StyledImage src={ProfilePicture} alt="Profile Picture" />
        </ProfileHeadShotDefault> }
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
