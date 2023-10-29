import * as React from "react"
import {Root} from "./BlogCard.styles";
import type { HeadFC, PageProps } from "gatsby"
import AccessAlarmIcon from '@mui/icons-material';
import { IconGithub, IconLinkedIn, IconGmail, IconInstagram } from '../../images/icons';
import { Box, Container, Grid, LinearProgress } from "@mui/material";

const BlogCard: React.FC<{
  title? : string,
  date? : string,
  tags? : string[],
  imageUrl? : string,
}> = () => {

  return (
    <Root >
      This is a Blog Card 
    </Root>
  )
  }

export default BlogCard;
