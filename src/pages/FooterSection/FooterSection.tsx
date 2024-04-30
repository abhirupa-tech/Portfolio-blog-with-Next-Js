import * as React from "react"
import { ActionBarContainer, FooterSubtext, FooterText, Root } from "./FooterSection.styles";
import ActionIconBar from "../../components/ActionIconBar/ActionIconBar";

const FooterSection: React.FC<{}> = () => {

  return (
    <Root>           
      <FooterText>Want To Collaborate?</FooterText>
      <FooterSubtext>Drop me an email at thetravellingprogrammer@gmail.com</FooterSubtext>
      <ActionBarContainer><ActionIconBar/></ActionBarContainer>
    </Root>
  )
  }

export default FooterSection;
