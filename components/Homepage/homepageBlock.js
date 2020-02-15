import React from "react";
import { createComponent } from "react-fela";
import { HeadingMedium, Paragraph } from "../StyledText";
import Link from "next/link";

const container = () => ({
  padding: "20px 16px 10px",
  margin: "10px",
  border: "1px dotted gray",
  width: "230px",
  textAlign: "center",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  ":hover": {
    cursor: "pointer",
    border: "1px solid black"
  }
});

const Container = createComponent(container, "div", ["onClick"]);

const alternatingFontColors = [
  "#ff9a17",
  "#bb77f7",
  "#67ab02",
  "#00c3c9",
  "#c90072"
];

const HomepageBlock = ({
  index,
  animationName,
  animationDescription,
  animationKey
}) => {
  const colorCode = index % 5;
  const fontColor = alternatingFontColors[colorCode];
  return (
    <Link href={`/${animationKey}`}>
      <Container>
        <HeadingMedium color={fontColor}>{animationName}</HeadingMedium>
        <Paragraph>{animationDescription}</Paragraph>
      </Container>
    </Link>
  );
};

export default HomepageBlock;
