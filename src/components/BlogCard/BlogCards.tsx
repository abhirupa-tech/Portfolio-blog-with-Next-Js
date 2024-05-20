import * as React from "react"
import {Root, BlogCard, BlogCardDate, BlogCardHeader, BlogContent} from "./BlogCards.styles";
import { Grid } from "@mui/material";
import { useTheme, useMediaQuery } from '@mui/material/';


export interface BlogData {
  title : string,
  content: string,
  date : string,
  tags : string[],
  imageUrl : string,
}

const BlogCards: React.FC<{}> = ({
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
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={12} sm={12} md={12} lg={4} key={index}>
            <BlogCard elevation={2}>
              <BlogContent>
                <BlogCardHeader>Some heading which is long to test the card limit which seems to be decent for now.</BlogCardHeader>
                <BlogCardDate>20th May, 2015</BlogCardDate>
              </BlogContent>
            </BlogCard>
          </Grid>
        ))}
      </Grid>
    </Root>
  )
}


export default BlogCards;
