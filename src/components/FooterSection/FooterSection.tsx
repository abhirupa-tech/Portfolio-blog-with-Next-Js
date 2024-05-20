import * as React from "react"
import { Item, Root } from "./FooterSection.styles";

const FooterSection: React.FC<{}> = () => {

  return (
    <Root
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={20}>
        <Item>Book a Call</Item>
        <Item>Collaborate</Item>
        <Item>LinkedIn</Item>
    </Root>
  )
  }

export default FooterSection;
