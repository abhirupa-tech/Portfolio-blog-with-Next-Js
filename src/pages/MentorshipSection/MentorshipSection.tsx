import * as React from "react"
import {Root, MentorshipImage, MentorshipHeader, MentorshipAbout} from "./MentorshipSection.styles";
import MentorshipImg from "./../../images/mentorshipImage.svg";
import { MaterialButton } from "../index.styles";

const MentorshipSection: React.FC<{}> = () => {

  return (
    <Root>
        <MentorshipHeader>
            Avail Mentoring Sessions and Mock Interviews to Boost your Career
        </MentorshipHeader>
        <MentorshipAbout>
            As a software developer, I offer 60-minute rapid mentorship to aspiring engineers.
            I can help you with your technical skills and guide you through the process of becoming 
            a successful engineer. Let’s work together to achieve your goals.
        </MentorshipAbout>
        <MaterialButton>Book A Meeting</MaterialButton>      
    </Root>
  )
}

export default MentorshipSection;
