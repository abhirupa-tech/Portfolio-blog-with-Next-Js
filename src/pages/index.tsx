import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import IntroductionSection from "./HomePage";
import { Body, GlobalStyle } from "./index.styles";
import BlogSection from "./BlogSection/BlogSection";
import MentorshipSection from "./MentorshipSection/MentorshipSection";
import FooterSection from "./FooterSection/FooterSection";
import Navbar from './../components/Navbar/Navbar';

const IndexPage: React.FC<PageProps> = () => {
  return (<>
    <GlobalStyle/>
    <Navbar/>
      <IntroductionSection/>
      <BlogSection/>
      <MentorshipSection/>
      <FooterSection/>
    </>
  )
}

export default IndexPage

// export const Head: HeadFC = () => <title>Home Page</title>
