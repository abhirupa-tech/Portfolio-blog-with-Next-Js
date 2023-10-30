import * as React from "react"
import {Root} from "./BlogSection.styles";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./CarouselStaticStyle.css";
import "react-use-carousel-hook/dist/index.css";
import { items } from "../../utils";
import { useCarousel } from "react-use-carousel-hook";

const BlogSection: React.FC<{}> = () => {
  
  const { Carousel, Slides, Control, Pagination } = useCarousel();

  return (
    <Root >
      <Carousel>
        <Slides className="slides">
          {items.map((item) => (
            <BlogCard/>
          ))}
        </Slides>
        <div className="controls">
          <Control direction="prev" className="control">
            P
          </Control>
          <Pagination
            className="pagination"
            buttonClassName="paginationButton"
          />
          <Control direction="next" className="control">
            N
          </Control>
        </div>
      </Carousel>
      {/* </Container> */}
    </Root>
  )
  }

export default BlogSection;
