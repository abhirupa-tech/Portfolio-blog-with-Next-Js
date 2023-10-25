import * as React from "react"
import {Root} from "./BlogCard.styles";
import type { HeadFC, PageProps } from "gatsby"
import AccessAlarmIcon from '@mui/icons-material';
import { IconGithub, IconLinkedIn, IconGmail, IconInstagram } from '../../images/icons';
import { Box, Container, Grid, LinearProgress } from "@mui/material";

const BlogCard: React.FC<{}> = () => {

  return (
    <Root >
      Blog Content 
    </Root>
  )
  }

export default BlogCard;
