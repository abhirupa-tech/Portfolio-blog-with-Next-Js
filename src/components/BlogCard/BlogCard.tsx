import * as React from "react"
import {BlogCardContent, CardContent, BlogCardHeader, BlogCardImage, BlogCardTags, Blog, Root, BlogCardTag} from "./BlogCard.styles";
import type { HeadFC, PageProps } from "gatsby"
import { Box, Button, CardActions,} from "@mui/material";

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

  return (
    <Root >
      <Blog>
        <BlogCardImage/>
        <CardContent>
          <BlogCardHeader> {title} </BlogCardHeader>
          <BlogCardTag> {tags[0]}</BlogCardTag>
          <BlogCardContent>{content}</BlogCardContent>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary"> Continue Reading  </Button>
          </CardActions>
      </Blog>
    </Root>
  )
  }

export default BlogCard;
