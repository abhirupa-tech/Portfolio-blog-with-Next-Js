import { createTheme } from "@mui/material";
import { BlogData } from "./components/BlogCard/BlogCards";

export const blogItems : BlogData[] = [
    {
      title: "Reduce your React App Size in an Intelligent Way",
      content: `This is some dummy content that will be replaced, I have this added
      just to test the number of lines that would fit in this card. After max lines I will add elipses`,
      tags: ["Tech"],
      date: "#390099",
      imageUrl: "",
    },    
    {
      title: "Revamp your Resume in 10 Quick Steps",
      content: `This is some dummy content that will be replaced, I have this added
      just to test the number of lines that would fit in this card. After max lines I will add elipses`,
      tags: ["Tech"],
      date: "#390099",
      imageUrl: "",
    }, 
    {
      title: "Artificial Intelligence For a Tenth Grader",
      content: `This is some dummy content that will be replaced, I have this added
      just to test the number of lines that would fit in this card. After max lines I will add elipses. This is some dummy content that will be replaced, I have this added
      just to test the number of lines that would fit in this card. After max lines I will add elipses`,
      tags: ["Tech"],
      date: "#390099",
      imageUrl: "",
    }
  ];

/**MUI Theme Breakpoints For Responsiveness */
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,    // extra-small screens
      sm: 600,  // small screens
      md: 1050,  // medium screens
      lg: 1280, // large screens
      xl: 1920, // extra-large screens
    },
  },
});