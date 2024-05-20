import * as React from "react"
import {Root, BlogCard, BlogCardDate, BlogCardHeader, BlogContent} from "./BlogCards.styles";
import { Grid } from "@mui/material";
import { useTheme, useMediaQuery } from '@mui/material/';


export interface BlogData {
  title : string,
  date : string,
}

export interface Blogs {
  blogs: BlogData[];
}

const BlogCards: React.FC<Blogs> = ({
  blogs,  
}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) 
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobileOrTablet = isMobile || isTablet;

  return (
    <Root >
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={4}
      >
        {Array.from(blogs).map((blog, index) => (
          <Grid item xs={12} sm={12} md={12} lg={4} key={index}>
            <BlogCard elevation={2}>
              <BlogContent>
                <BlogCardHeader>{blog.title}</BlogCardHeader>
                <BlogCardDate>{blog.date}</BlogCardDate>
              </BlogContent>
            </BlogCard>
          </Grid>
        ))}
      </Grid>
    </Root>
  )
}


export default BlogCards;
