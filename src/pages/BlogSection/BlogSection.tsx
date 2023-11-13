import * as React from "react"
import {Root, BlogContainer, MaterialButton} from "./BlogSection.styles";
import BlogCard from "../../components/BlogCard/BlogCard";
import "react-use-carousel-hook/dist/index.css";

const BlogSection: React.FC<{}> = () => {

  return (
    <Root>
      <BlogContainer>
          <BlogCard/>
          <BlogCard/>          
          <BlogCard/>
      </BlogContainer>      
      <MaterialButton>Read More</MaterialButton>
    </Root>
  )
  }

export default BlogSection;
