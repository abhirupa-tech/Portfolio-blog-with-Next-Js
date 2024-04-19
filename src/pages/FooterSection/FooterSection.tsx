import * as React from "react"
import { FooterSubtext, FooterText, Root } from "./FooterSection.styles";

const FooterSection: React.FC<{}> = () => {

  return (
    <Root>           
      <FooterText>Want To Collaborate?</FooterText>
      <FooterSubtext>Drop me an email at thetravellingprogrammer@gmail.com</FooterSubtext>
    </Root>
  )
  }

export default FooterSection;
