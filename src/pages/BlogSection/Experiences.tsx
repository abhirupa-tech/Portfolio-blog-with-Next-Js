import * as React from "react"
import {DeveloperName, Root, DeveloperAbout, Main, Icon, MaterialButton} from "./Experiences.styles";
import type { HeadFC, PageProps } from "gatsby"
import AccessAlarmIcon from '@mui/icons-material';
import { IconGithub, IconLinkedIn, IconGmail, IconInstagram } from '../images/icons';
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./../index.css";
import "react-use-carousel-hook/dist/index.css";
import { items } from "./../../utils";
import { useCarousel } from "react-use-carousel-hook";

const ExperienceSection: React.FC<{}> = () => {
  
  const { Carousel, Slides, Control, Pagination } = useCarousel();

  return (
    <Root >
      {/* <Container maxWidth="xl"> */}
        
      
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

export default ExperienceSection;
