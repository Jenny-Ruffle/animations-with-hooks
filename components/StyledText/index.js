import { createComponent } from "react-fela";

const headingLarge = ({ color = "black" }) => ({
  font: "26px/30px Georgia, serif",
  padding: "0 0 16px 0",
  margin: 0,
  color
});

export const HeadingLarge = createComponent(headingLarge, "h1");

const headingMedium = ({ color = "black" }) => ({
  font: "18px/22px Georgia, serif",
  padding: "4px 0 16px 0",
  margin: 0,
  color,
  textDecoration: "none"
});

export const HeadingMedium = createComponent(headingMedium, "h1");

const paragraph = () => ({
  font: "12px/18px Verdana, serif",
  padding: "0 0 16px 0",
  margin: 0,
  fontColor: "black"
});

export const Paragraph = createComponent(paragraph, "p");
