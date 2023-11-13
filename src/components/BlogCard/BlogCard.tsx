import * as React from "react"
import {BlogCardContent, CardContent, BlogCardHeader, BlogCardImage, BlogCardTags, Blog, Root} from "./BlogCard.styles";
import type { HeadFC, PageProps } from "gatsby"
import { Box, Button, CardActions,} from "@mui/material";

const BlogCard: React.FC<{
  title? : string,
  date? : string,
  tags? : string[],
  imageUrl? : string,
}> = () => {

  return (
    <Root >
      <Blog>
        <BlogCardImage/>
        <CardContent>
          <BlogCardHeader>
            Lizard
          </BlogCardHeader>
          <BlogCardTags> This is a tag </BlogCardTags>
          <BlogCardContent>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </BlogCardContent>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
      </Blog>
    </Root>
  )
  }

export default BlogCard;
