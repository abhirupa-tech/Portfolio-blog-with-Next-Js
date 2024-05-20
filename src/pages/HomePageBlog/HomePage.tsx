import * as React from "react"
import {DeveloperName, Root, DeveloperAbout, CustomRow, StyledImage, DeveloperIntro, ProfileHeadShot} from "./homepage.styles";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePicture from "../../images/ProfilePicture.png";
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";
import { MaterialButton } from "../index.styles";
import ActionIconBar from "../../components/ActionIconBar/ActionIconBar";
import { COMMUNITY_SECTION_HEADER, COMMUNITY_SECTION_TEXT, DEVELOPER_ABOUT_P1, DEVELOPER_ABOUT_P2, DEVELOPER_NAME, MENTORSHIP_ABOUT, MENTORSHIP_HEADER } from "../../constants";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import BlogCards from "../../components/BlogCard/BlogCards";
import MentorshipSection from "../../components/MentorshipSection/MentorshipSection";

const IntroductionSection: React.FC<{}> = () => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) ;
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleMeetingBookingClick = () => {
    window.open("https://topmate.io/abhirupa_mitra", '_blank');
  };

  return (
    <Root fixed >
      {/* Navbar Section */}
      <Navbar/>
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
      <MentorshipSection header={MENTORSHIP_HEADER} text={MENTORSHIP_ABOUT} />   
      <BlogCards/>      
      <MentorshipSection header={COMMUNITY_SECTION_HEADER} text={COMMUNITY_SECTION_TEXT} />
      
    </Root>
  )
}

export default IntroductionSection
