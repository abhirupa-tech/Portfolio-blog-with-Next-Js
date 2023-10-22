import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import IntroductionSection from "./HomePage"
import { Body, GlobalStyle } from "./index.styles"

const IndexPage: React.FC<PageProps> = () => {
  return (<>
    <GlobalStyle/>
      <IntroductionSection/></>
  )
}

export default IndexPage

// export const Head: HeadFC = () => <title>Home Page</title>
