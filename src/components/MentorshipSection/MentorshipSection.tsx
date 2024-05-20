import * as React from "react"
import {Root, MentorshipImage, MentorshipHeader, MentorshipAbout} from "./MentorshipSection.styles";
import MentorshipImg from "./../../images/mentorshipImage.svg";
import { MaterialButton } from "../../pages/index.styles";
import { MENTORSHIP_ABOUT, MENTORSHIP_HEADER } from "../../constants";

export interface TextSection {
  header: string;
  text: string;
}
const MentorshipSection: React.FC<TextSection> = ({
  header,
  text,
}) => {

  return (
    <Root>
        <MentorshipHeader>{header}</MentorshipHeader>
        <MentorshipAbout>{text}</MentorshipAbout>
        <MaterialButton>Book A Meeting</MaterialButton>      
    </Root>
  )
}

export default MentorshipSection;
