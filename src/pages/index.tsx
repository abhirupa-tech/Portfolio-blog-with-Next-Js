import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import IntroductionSection from "./HomePage";
import { Body, GlobalStyle } from "./index.styles";
import ExperienceSection from "./BlogSection/Experiences";
import { useCarousel } from 'react-use-carousel-hook';

const IndexPage: React.FC<PageProps> = () => {
  return (<>
    <GlobalStyle/>
      <IntroductionSection/>
      <ExperienceSection/>
      <div className="App">
      
    </div>
    </>
  )
}

export default IndexPage

// export const Head: HeadFC = () => <title>Home Page</title>
