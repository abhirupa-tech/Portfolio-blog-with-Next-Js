import * as React from "react"
import {Root, BlogContainer, MaterialButton} from "./BlogSection.styles";
import BlogCard from "../../components/BlogCard/BlogCard";
import "react-use-carousel-hook/dist/index.css";
import { blogItems } from "../../utils";

const BlogSection: React.FC<{}> = () => {

  return (
    <Root>
      <BlogContainer>
          <BlogCard {...blogItems[0]} />          
          <BlogCard {...blogItems[1]} />          
          <BlogCard {...blogItems[2]} />
      </BlogContainer>      
      <MaterialButton>Read More</MaterialButton>
    </Root>
  )
  }

export default BlogSection;
