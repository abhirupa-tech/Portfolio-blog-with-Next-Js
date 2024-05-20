import * as React from "react"
import {Root, MentorshipImage, MentorshipHeader, MentorshipAbout} from "./GenericTextSection.styles";
import MentorshipImg from "./../../images/mentorshipImage.svg";
import { MaterialButton } from "../../pages/index.styles";
import { MENTORSHIP_ABOUT, MENTORSHIP_HEADER } from "../../constants";

export interface GenericTextSection {
  header: string;
  text: string;
}
const GenericTextSection: React.FC<GenericTextSection> = ({
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

export default GenericTextSection;
