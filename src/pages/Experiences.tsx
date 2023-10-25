import * as React from "react"
import {DeveloperName, Root, DeveloperAbout, Main, Icon, MaterialButton} from "./Experiences.styles";
import type { HeadFC, PageProps } from "gatsby"
import AccessAlarmIcon from '@mui/icons-material';
import { IconGithub, IconLinkedIn, IconGmail, IconInstagram } from '../images/icons';
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import BlogCard from "../components/BlogCard/BlogCard";

const ExperienceSection: React.FC<{}> = () => {

  return (
    <Root >
      <Container maxWidth="xl">
      <Grid container maxWidth="xl" spacing={8}>
        <Grid item xs={4}>
          <BlogCard/>
        </Grid>
        <Grid item xs={4}>
          <BlogCard/>
        </Grid>
        <Grid item xs={4}>
          <BlogCard/>
        </Grid>
      </Grid>
      </Container>
    </Root>
  )
  }

export default ExperienceSection;
