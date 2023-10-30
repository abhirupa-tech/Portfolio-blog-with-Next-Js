import * as React from "react"
import {BlogCardContent, BlogCardHeader, BlogCardImage, BlogCardTags, Root} from "./BlogCard.styles";
import type { HeadFC, PageProps } from "gatsby"
import AccessAlarmIcon from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, LinearProgress, Typography } from "@mui/material";

const BlogCard: React.FC<{
  title? : string,
  date? : string,
  tags? : string[],
  imageUrl? : string,
}> = () => {

  return (
    <Root >
        <BlogCardImage>Image goes Here</BlogCardImage>
        <CardContent>
          <BlogCardHeader>
            Lizard
          </BlogCardHeader>
          <BlogCardTags> This is a tag </BlogCardTags>
          <BlogCardContent>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </BlogCardContent>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Root>
  )
  }

export default BlogCard;
