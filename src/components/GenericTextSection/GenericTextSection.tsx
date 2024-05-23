import * as React from "react"
import {Root, MentorshipHeader, MentorshipAbout} from "./GenericTextSection.styles";
import { MaterialButton } from "../../pages/index.styles";

export interface GenericTextSection {
  header: string;
  text: string;
  shouldShowButton: boolean;
  buttonText?: string;
  buttonRedirectionLink?: string;
}
const GenericTextSection: React.FC<GenericTextSection> = ({
  header,
  text,
  shouldShowButton,
  buttonText,
  buttonRedirectionLink,
}) => {

  const redirect = () => {
    console.log("Button Clicked!");
    window.open(buttonRedirectionLink);
  }

  return (
    <Root>
        <MentorshipHeader>{header}</MentorshipHeader>
        <MentorshipAbout>{text}</MentorshipAbout>
        {shouldShowButton && <MaterialButton onClick={() => {redirect()}}>{buttonText}</MaterialButton>}
    </Root>
  )
}

export default GenericTextSection;
