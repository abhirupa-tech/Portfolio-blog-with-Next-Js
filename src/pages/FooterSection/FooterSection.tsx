import * as React from "react"
import { Footer, FooterSubtext, FooterText, Root } from "./FooterSection.styles";

const FooterSection: React.FC<{}> = () => {

  return (
    <Root>
        <Footer>            
            <FooterText>Want To Collaborate?</FooterText>
            <FooterSubtext>Drop me an email at thetravellingprogrammer@gmail.com</FooterSubtext>
        </Footer>

    </Root>
  )
  }

export default FooterSection;
