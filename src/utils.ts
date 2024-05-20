import { createTheme } from "@mui/material";
import { BlogData } from "./components/BlogCard/BlogCards";



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