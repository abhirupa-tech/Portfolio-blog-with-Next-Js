import * as React from "react"
import {DeveloperName, Root, DeveloperAbout, Main} from "./homepage.styles";
import type { HeadFC, PageProps } from "gatsby"

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
          <span><div>Icon</div>
          <div>Icon</div>
          <p>Icon</p>
          <p>Icon</p></span>
        </Main>
      </Root>
    )
  }

export default IntroductionSection
