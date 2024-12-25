import { Grid } from "@mui/material";
import * as React from "react";
import Background from './../../images/blogImage.jpg';
import Background2 from './../../images/blogImg2.jpg';
import Background3 from './../../images/blogbg3.jpg';
import Background4 from './../../images/blogbg4.jpg';
import { BlogCard, Card, BlogCardDate, BlogCardHeader, BlogCardImage, BlogContent, Root, Header } from "./BlogCards.styles";


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

  const blogUrl = [Background, Background2, Background3, Background4];

  const handleBlogCardOnClick = (url : string) => {
    console.log("Blog Crad Clicked");
    window.open(url);
  }

  return (
    <Root >
      
		  <Header>Tech Blogs and Articles</Header>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={4}
      >
        {Array.from(blogs).map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card>
              <BlogCardImage style={{ backgroundImage: `url(${blogUrl[index] ?? ""})`}}/>
              <BlogCard onClick={() => {handleBlogCardOnClick(blog.redirectionLink ?? "")}} elevation={2} >
                <BlogContent>
                  <BlogCardHeader>{blog.title}</BlogCardHeader>
                  <BlogCardDate>{blog.date}</BlogCardDate>
                </BlogContent>
              </BlogCard>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Root>
  )
}


export default BlogCards;
