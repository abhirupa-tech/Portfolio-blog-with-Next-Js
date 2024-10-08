import { Grid } from "@mui/material";
import * as React from "react";
import Background from './../../images/blogImage.jpg';
import Background2 from './../../images/blogImg2.jpg';
import Background3 from './../../images/blogbg3.jpg';
import { BlogCard, BlogCardDate, BlogCardHeader, BlogContent, Root } from "./BlogCards.styles";


export interface BlogData {
  title : string,
  date : string,
  imageUrl?: string,
  redirectionLink?: string,
}

export interface Blogs {
  blogs: BlogData[];
}

const BlogCards: React.FC<Blogs> = ({
  blogs,  
}) => {

  const blogUrl = [Background, Background2, Background3];

  const handleBlogCardOnClick = (url : string) => {
    console.log("Blog Crad Clicked");
    window.open(url);
  }

  return (
    <Root >
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={4}
      >
        {Array.from(blogs).map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            {/* {blogUrl = blog.imageUrl ?? ""}
            {console.log("URL:", blogUrl, "index:", index)}; */}
            <BlogCard onClick={() => {handleBlogCardOnClick(blog.redirectionLink ?? "")}} elevation={2} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${blogUrl[index] ?? ""})`}}>
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
