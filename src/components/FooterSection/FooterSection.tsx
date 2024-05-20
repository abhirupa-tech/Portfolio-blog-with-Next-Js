import * as React from "react"
import { Item, Root } from "./FooterSection.styles";

const FooterSection: React.FC<{}> = () => {

  return (
    <Root
      direction={{ xs: 'row', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: '4', sm: '10' }}>
        <Item color="inherit" href="https://topmate.io/abhirupa_mitra">Book a Call</Item>
        <Item color="inherit" href="https://www.instagram.com/thetravellingprogrammer/">Collaborate</Item>
        <Item color="inherit" href="https://www.linkedin.com/in/abhirupa-mitra/">LinkedIn</Item>
    </Root>
  )
  }

export default FooterSection;
