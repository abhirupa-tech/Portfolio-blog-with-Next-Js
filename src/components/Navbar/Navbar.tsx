import * as React from "react"
import {Navbar, Root} from "./Navbar.styles";
import type { HeadFC, PageProps } from "gatsby"
import { Box, Button, CardActions, Container,} from "@mui/material";

const BlogCard: React.FC<{}> = () => {

  return (
    <Root>
      <Navbar>@thetravellingprogrammer</Navbar>
    </Root>
  )
}

export default BlogCard;
