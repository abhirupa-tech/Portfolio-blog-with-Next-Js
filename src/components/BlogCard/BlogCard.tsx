import * as React from "react"
import {BlogCardContent, CardContent, BlogCardHeader, BlogCardImage, BlogCardTags, Blog, Root, BlogCardTag, CardAction} from "./BlogCard.styles";


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
          <CardAction> Continue Reading  </CardAction>         
        </CardContent>
      </Blog>
    </Root>
  )
  }

export default BlogCard;
