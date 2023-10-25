import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import IntroductionSection from "./HomePage"
import { Body, GlobalStyle } from "./index.styles"
import ExperienceSection from "./Experiences"

const IndexPage: React.FC<PageProps> = () => {
  return (<>
    <GlobalStyle/>
      <IntroductionSection/>
      <ExperienceSection/>
      
    </>
  )
}

export default IndexPage

// export const Head: HeadFC = () => <title>Home Page</title>
