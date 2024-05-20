import React, { useEffect, useState } from 'react';
import IntroductionSection from "./HomePageBlog/HomePage";
import { Body, GlobalStyle } from "./index.styles";
import FooterSection from "../components/FooterSection/FooterSection";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils";
import Navbar from '../components/Navbar/Navbar';

function App() {
  useEffect(() => {
    
  }, []);

  return (
    <ThemeProvider theme={theme}>  
      <Body>
          <GlobalStyle />          
          <Navbar/>
          <IntroductionSection />
          <FooterSection />
        </Body>
    </ThemeProvider>
    
  );
}

export default App;