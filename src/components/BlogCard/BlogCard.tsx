import * as React from "react"
import {BlogCardContent, BlogCardHeader, BlogCardImage, Blog, Root, BlogCardTag, CardAction, BlogTextArea} from "./BlogCard.styles";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


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
      {/* <Blog>
        <BlogCardImage/>
        <CardContent>
          <BlogCardHeader> {title} </BlogCardHeader>
          <BlogCardContent>{content}</BlogCardContent>
          <CardAction> Continue Reading  </CardAction>         
        </CardContent>
      </Blog> */}
      <Blog>
        <CardActionArea>
          <BlogCardImage
          />
          <BlogTextArea>
            <BlogCardHeader> {title} </BlogCardHeader>
            <BlogCardContent> {content} </BlogCardContent>
            <CardAction> Continue Reading  </CardAction> 
          </BlogTextArea>
        </CardActionArea>
      </Blog>
    </Root>
  )
  }

export default BlogCard;
