import Grid from '@mui/material/Grid';
import * as React from "react";
import ActionIconBar from "../../components/ActionIconBar/ActionIconBar";
import BlogCards from "../../components/BlogCard/BlogCards";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import GenericTextSection from "../../components/GenericTextSection/GenericTextSection";
import PortfolioProjects from "../../components/PortfolioProjects/PortfolioProjects";
import { COMMUNITY_SECTION_HEADER, COMMUNITY_SECTION_TEXT, DEVELOPER_ABOUT_P1, DEVELOPER_ABOUT_P2, DEVELOPER_NAME, MENTORSHIP_ABOUT, MENTORSHIP_HEADER, RESEARCH_SECTION_HEADER, RESEARCH_SECTION_TEXT, blogs, projects, research } from "../../constants";
import ProfilePicture from "../../images/ProfilePicture.png";
import { DeveloperAbout, DeveloperIntro, DeveloperName, ProfileHeadShot, Root, StyledImage } from "./homepage.styles";
import Research from '../../components/ResearchSection/Research';

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
      <GenericTextSection header={MENTORSHIP_HEADER} text={MENTORSHIP_ABOUT} shouldShowButton={true} buttonRedirectionLink = "https://topmate.io/abhirupa_mitra" buttonText="Book A Meeting" />   
      <BlogCards {...blogs}/>      
      <GenericTextSection header={RESEARCH_SECTION_HEADER} text={RESEARCH_SECTION_TEXT} shouldShowButton={false}  />
      <PortfolioProjects {...projects}/>
      <GenericTextSection header={COMMUNITY_SECTION_HEADER} text={COMMUNITY_SECTION_TEXT} shouldShowButton={false}  />
      
    </Root>
  )
}

export default IntroductionSection
