import * as React from "react"
import {BlogCardContent, BlogCardHeader, BlogCardImage, Blog, Root, BlogCardTag, CardAction, BlogTextArea, BlogMobile} from "./BlogCard.styles";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from '@mui/material/';

import Box from '@mui/material/Box';

export interface BlogData {
  title : string,
  content: string,
  date : string,
  tags : string[],
  imageUrl : string,
}

const BlogCard: React.FC<BlogData> = ({
  title, content, date, tags, imageUrl,
}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) 
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobileOrTablet = isMobile || isTablet;

  return (
    <Root >
      {!isMobileOrTablet && <Blog>
        <CardActionArea>
          <BlogCardImage />
          <BlogTextArea>
            <BlogCardHeader> {title} </BlogCardHeader>
            <BlogCardContent> {content} </BlogCardContent>
            <CardAction> Continue Reading  </CardAction> 
          </BlogTextArea>
        </CardActionArea>
      </Blog>}

      { isMobileOrTablet && <BlogMobile sx={{ display: 'flex'}}>
        <CardMedia
          component="img"
          image={require("./../../images/blog1img.jpg")}
          alt="Blog image"
          sx={{ width: '50%'}}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' ,justifyContent: "center" ,alignItems:"center"}}>
          <CardContent>
            <BlogCardHeader> {title} </BlogCardHeader>
            <BlogCardContent> {content} </BlogCardContent>
            <CardAction> Continue Reading  </CardAction> 
          </CardContent>
        </Box>
      </BlogMobile>}

    </Root>
  )
}


export default BlogCard;
