import React from 'react';
import IntroductionSection from "./HomePageBlog/HomePage";
import { Body, GlobalStyle } from "./index.styles";
import MentorshipSection from "./MentorshipSection/MentorshipSection";
import FooterSection from "./FooterSection/FooterSection";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils";

function App() {
  return (
    <ThemeProvider theme={theme}>  
      <Body>
          <GlobalStyle />
          <IntroductionSection />
          <MentorshipSection />
          <FooterSection />
        </Body>
    </ThemeProvider>
    
  );
}

export default App;