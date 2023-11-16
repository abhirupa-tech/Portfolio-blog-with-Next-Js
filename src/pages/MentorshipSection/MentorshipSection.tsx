import * as React from "react"
import {Root, MaterialButton, MentorshipContainer, MentorshipImage, MentorshipHeader, MentorshipAbout, CenteredButton, RowCentered} from "./MentorshipSection.styles";
import BlogCard from "../../components/BlogCard/BlogCard";
import "react-use-carousel-hook/dist/index.css";
import { Box, Container } from "@mui/material";
import { Col, Row } from "react-grid-system";

const MentorshipSection: React.FC<{}> = () => {

  return (
    <Root>
        <MentorshipContainer>
            <Row>
                <Col sm={4}>
                    <MentorshipImage/>
                </Col>
                <Col sm={8}>
                    <MentorshipHeader>
                       <p>Avail</p>
                       <p>Career Sessions</p>
                       <p>for the price of</p>
                       <p>a cup of Coffee</p>
                    </MentorshipHeader>
                    <MentorshipAbout>
                    This a a minimal description of the Blog content and will 
                    redirect to the Blog Page and will briefly summarize the 
                    scontents of this blog.
                    </MentorshipAbout>
                    
                    <MaterialButton>
                        Book a 1:1 Session
                    </MaterialButton>
                </Col>
            </Row>
        </MentorshipContainer>
        
    </Root>
  )
  }

export default MentorshipSection;
