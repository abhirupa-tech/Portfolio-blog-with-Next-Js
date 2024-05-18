import * as React from "react"
import {DeveloperName, BlogContainer, Root, DeveloperAbout, IntroGrid, CustomRow, StyledImage, homePageGridStyles, DeveloperIntro, ProfileHeadShot} from "./homepage.styles";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogItems } from "../../utils";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePicture from "../../images/ProfilePicture.png";
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { Container, useMediaQuery } from "@mui/material";
import { MaterialButton } from "../index.styles";
import ActionIconBar from "../../components/ActionIconBar/ActionIconBar";
import { DEVELOPER_ABOUT_P1, DEVELOPER_ABOUT_P2, DEVELOPER_NAME } from "../../constants";

const IntroductionSection: React.FC<{}> = () => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) ;
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleMeetingBookingClick = () => {
    window.open("https://topmate.io/abhirupa_mitra", '_blank');
  };

  return (
    <Root >
      {/* Navbar Section */}
      <Navbar/>

      {/* Introduction Section */}
      
      <IntroGrid>
        <Grid container spacing={2}>
          <ProfileHeadShot sm={12} md={5}>
            <StyledImage src={ProfilePicture} alt="Profile Picture" />
          </ProfileHeadShot>
          <DeveloperIntro sm={12} md={7}>            
            <DeveloperName>{DEVELOPER_NAME} </DeveloperName>            
            <DeveloperAbout>
                <p>{DEVELOPER_ABOUT_P1}</p>
                <p>{DEVELOPER_ABOUT_P2}</p>
            </DeveloperAbout>
            
            <ActionIconBar/>
            <MaterialButton onClick={handleMeetingBookingClick}>Let me Mentor You</MaterialButton>
          </DeveloperIntro>
        </Grid>          
      </IntroGrid>

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
        <MaterialButton onClick={handleMeetingBookingClick}>Read Some More</MaterialButton>
      </CustomRow>
    </Root>
  )
}

export default IntroductionSection
