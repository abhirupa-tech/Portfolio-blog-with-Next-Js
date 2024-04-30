import * as React from "react"
import GithubIcon from "../../images/icons/githubIcon.png";
import InstagramIcon from "../../images/icons/instagramIcon.png";
import MailIcon from "../../images/icons/emailIcon.png";
import LinkedInIcon from "../../images/icons/linkedInIcon.png";
import { Icon, IconContainer, IconImg } from "./ActionIconBar.styles";

const ActionIconBar: React.FC<{}> = () => {

  const handleGithubButtonOnClick = () => {
    window.open("https://github.com/abhirupa-tech/", '_blank'); // Opens the URL in a new tab
  };

  const handleLinkedInButtonOnClick = () => {
    window.open("https://www.linkedin.com/in/abhirupa-mitra/", '_blank'); // Opens the URL in a new tab
  };

  const handleInstgramButtonOnClick = () => {
    window.open("https://www.instagram.com/thetravellingprogrammer/", '_blank'); // Opens the URL in a new tab
  };

  const handleEmailButtonOnClick = () => {
    window.location.href = "mailto:yourname@example.com";
  };

  return (    
    <>
        <IconContainer>
            <Icon onClick={handleGithubButtonOnClick}>                
                <IconImg src={GithubIcon} alt="Image"/>
            </Icon>              
            <Icon onClick={handleInstgramButtonOnClick}>                
                <IconImg src={InstagramIcon} alt="Image"/>
            </Icon>              
            <Icon onClick={handleLinkedInButtonOnClick}>                
                <IconImg src={LinkedInIcon} alt="Image"/>
            </Icon>              
            <Icon onClick={handleEmailButtonOnClick}>                
                <IconImg src={MailIcon} alt="Image"/>
            </Icon>
        </IconContainer> 
    </>
  )
}

export default ActionIconBar;
