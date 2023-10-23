import * as React from "react"
import {DeveloperName, Root, DeveloperAbout, Main, Icon, MaterialButton} from "./homepage.styles";
import type { HeadFC, PageProps } from "gatsby"
import AccessAlarmIcon from '@mui/icons-material';
import { IconGithub, IconLinkedIn, IconGmail, IconInstagram } from '../images/icons';

const IntroductionSection: React.FC<{}> = () => {
    return (
      <Root >
        <Main>
          <DeveloperName>
            Abhirupa
          </DeveloperName>
          <DeveloperAbout>
          I Build Products at Microsoft, India. If you do not find me at my computer then I am probably out in
          the mountains or huddled up with a cozy book.
          </DeveloperAbout>
          <span>
            <IconGithub/>
            <IconLinkedIn/>
            <IconInstagram/>
            <IconGmail/>
          </span> <br/>
          <MaterialButton>Let me Mentor You</MaterialButton>
        </Main>
      </Root>
    )
  }

export default IntroductionSection
