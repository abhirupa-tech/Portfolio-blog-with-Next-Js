import * as React from "react"
import {DeveloperName, BlogContainer, Root, DeveloperAbout, Icon, MaterialButton, IconContainer, IntroductionContainer, IntroductionColumn, DeveloperIntro, CustomRow} from "./homepage.styles";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogItems } from "../../utils";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePicture from "../../images/ProfilePicture.png";

import GithubIcon from "../../images/icons/githubIcon.png";
import InstagramIcon from "../../images/icons/instagramIcon.png";
import MailIcon from "../../images/icons/emailIcon.png";
import LinkedInIcon from "../../images/icons/linkedInIcon.png";


const IntroductionSection: React.FC<{}> = () => {
  
  return (
    <Root >
      {/* Navbar Section */}
      <Navbar/>

      {/* Introduction Section */}
      <IntroductionContainer>
        <IntroductionColumn md={1}/>
        <IntroductionColumn md={6}>
          <DeveloperIntro>            
            <DeveloperName>
              Abhirupa
            </DeveloperName>
            
            <DeveloperAbout>
                I Build Products at Microsoft, India. If you do not find me at my computer then I am probably out in
                the mountains or huddled up with a cozy book.
            </DeveloperAbout>
            
            <IconContainer>
              <Icon><img src={GithubIcon} height="80px" alt="Image"/></Icon>
              <Icon><img src={InstagramIcon} height="80px" alt="Image"/></Icon>
              <Icon><img src={LinkedInIcon} height="80px" alt="Image"/></Icon>
              <Icon><img src={MailIcon} height="80px" alt="Image"/></Icon>
            </IconContainer> 
            
            {/* <ProgressBar label={"Years Of Experience: 2+"} progressValue={20}/>        
            <ProgressBar label={"Projects Worked on: 3+"} progressValue={30}/> */}
            <MaterialButton>Let me Mentor You</MaterialButton>
          </DeveloperIntro>
          
        </IntroductionColumn>
        <IntroductionColumn md={4}>
          <img src={ProfilePicture} height="500px" alt="Image" />
        </IntroductionColumn>        
        <IntroductionColumn md={1}/>
      </IntroductionContainer>

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
