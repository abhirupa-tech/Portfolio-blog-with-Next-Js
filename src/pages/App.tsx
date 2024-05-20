import React from 'react';
import IntroductionSection from "./HomePageBlog/HomePage";
import { Body, GlobalStyle } from "./index.styles";
import FooterSection from "../components/FooterSection/FooterSection";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils";

function App() {
  return (
    <ThemeProvider theme={theme}>  
      <Body>
          <GlobalStyle />
          <IntroductionSection />
          <FooterSection />
        </Body>
    </ThemeProvider>
    
  );
}

export default App;