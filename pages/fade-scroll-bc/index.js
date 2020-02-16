import React from "react";
import Template from "../mainTemplate.js";
import FadeBC from "../../components/FadeBC";
import images from "../../data/images";
import { PaddingContainer } from "../../components/SpacingComponents";
import { HeadingMedium } from "../../components/StyledText";

const FadeIn2 = () => (
  <Template
    title="Fade In/Out | Bounding Client"
    description="Here are examples of responsive React components using the useState, useEffect and useRef hooks from React to calculate the opacity of an element currently in the viewport to give the desired effect of fading in and out. Fela css allows for the easy responsive nature of the CSS properties. Throttling is in place on each of the hooks."
  >
    <PaddingContainer height="50px">
      <HeadingMedium color="#008f9c">Fade Out</HeadingMedium>
    </PaddingContainer>
    <FadeBC fadeIn={false} src={images[0]} />
    <FadeBC fadeIn={false} src={images[1]} />
    <PaddingContainer height="50px">
      <HeadingMedium color="#008f9c">Fade In</HeadingMedium>
    </PaddingContainer>
    <FadeBC fadeIn={true} src={images[2]} />
    <FadeBC fadeIn={true} src={images[3]} />
  </Template>
);

export default FadeIn2;
