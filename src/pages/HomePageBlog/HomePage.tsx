import * as React from "react"
import {DeveloperName, Root, DeveloperAbout, StyledImage, DeveloperIntro, ProfileHeadShot} from "./homepage.styles";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePicture from "../../images/ProfilePicture.png";
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import ActionIconBar from "../../components/ActionIconBar/ActionIconBar";
import { COMMUNITY_SECTION_HEADER, COMMUNITY_SECTION_TEXT, DEVELOPER_ABOUT_P1, DEVELOPER_ABOUT_P2, DEVELOPER_NAME, MENTORSHIP_ABOUT, MENTORSHIP_HEADER } from "../../constants";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import BlogCards from "../../components/BlogCard/BlogCards";
import GenericTextSection from "../../components/GenericTextSection/GenericTextSection";

const IntroductionSection: React.FC<{}> = () => {
  const handleMeetingBookingClick = () => {
    window.open("https://topmate.io/abhirupa_mitra", '_blank');
  };

  return (
    <Root fixed >
      {/* Navbar Section */}
      <Grid container>
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
        </DeveloperIntro>
      </Grid>
      
      <CustomerReviews/>
      <GenericTextSection header={MENTORSHIP_HEADER} text={MENTORSHIP_ABOUT} />   
      <BlogCards/>      
      <GenericTextSection header={COMMUNITY_SECTION_HEADER} text={COMMUNITY_SECTION_TEXT} />
      
    </Root>
  )
}

export default IntroductionSection
