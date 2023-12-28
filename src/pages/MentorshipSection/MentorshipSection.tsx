import * as React from "react"
import {Image, Root, MaterialButton, MentorshipContainer, MentorshipImage, MentorshipHeader, MentorshipAbout} from "./MentorshipSection.styles";
import "react-use-carousel-hook/dist/index.css";
import { Col, Row } from "react-grid-system";
import MentorshipImg from "./../../images/mentorshipImage.svg";

const MentorshipSection: React.FC<{}> = () => {

  return (
    <Root>
        <MentorshipContainer>
            <Row>
                {/* <Col sm={1}/> */}
                <Col sm={8}>
                    <MentorshipHeader>
                        Avail my mentoring sessions for the price of a cup of coffee
                    </MentorshipHeader>
                    <MentorshipAbout>
                        As a software developer, I offer 60-minute rapid mentorship to aspiring engineers.
                        I can help you with your technical skills and guide you through the process of becoming 
                        a successful engineer. Let’s work together to achieve your goals.
                    </MentorshipAbout>                    
                    <MaterialButton>
                        Book a 1:1 Session
                    </MaterialButton>
                </Col>
                <Col sm={4}>
                    <Image src={MentorshipImg} height="400px" alt="Mentorhip Image"/>
                </Col>
            </Row>
        </MentorshipContainer>
        
    </Root>
  )
  }

export default MentorshipSection;
