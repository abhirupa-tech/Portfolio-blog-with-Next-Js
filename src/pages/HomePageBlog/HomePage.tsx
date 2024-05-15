import * as React from "react"
import {DeveloperName, BlogContainer, Root, DeveloperAbout, DeveloperIntro, CustomRow, StyledImage, homePageGridStyles, ProfileHeadShot} from "./homepage.styles";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogItems } from "../../utils";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePicture from "../../images/ProfilePicture.png";
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import { Container, useMediaQuery } from "@mui/material";
import { MaterialButton } from "../index.styles";
import ActionIconBar from "../../components/ActionIconBar/ActionIconBar";

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
      <Container maxWidth="md">        
          <ProfileHeadShot md={12}>
            <StyledImage src={ProfilePicture} alt="Profile Picture" />
          </ProfileHeadShot>
          <DeveloperIntro>            
            <DeveloperName> Abhirupa </DeveloperName>            
            <DeveloperAbout>
                I Build Products at Microsoft, India. If you do not find me at my computer then I am probably out in
                the mountains or huddled up with a cozy book.
            </DeveloperAbout>
            
            <ActionIconBar/>
            <MaterialButton onClick={handleMeetingBookingClick}>Let me Mentor You</MaterialButton>
          </DeveloperIntro>
      </Container>

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
