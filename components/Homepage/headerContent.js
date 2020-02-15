import React from "react";
import { createComponent } from "react-fela";
import { HeadingLarge, Paragraph } from "../StyledText/index";

const headingContainer = () => ({
  width: "100%",
  textAlign: "center"
});

const HeadingContainer = createComponent(headingContainer, "div");

const HeaderContent = ({ heading, subHeading }) => {
  return (
    <HeadingContainer>
      <HeadingLarge>{heading}</HeadingLarge>
      <Paragraph>{subHeading}</Paragraph>
    </HeadingContainer>
  );
};
export default HeaderContent;
