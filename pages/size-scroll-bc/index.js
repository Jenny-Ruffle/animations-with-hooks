import React from "react";
import Template from "../mainTemplate.js";
import images from "../../data/images";
import ResizeBC from "../../components/ResizeBC";
import { HeadingMedium } from "../../components/StyledText";
import { PaddingContainer } from "../../components/SpacingComponents";

const Resize2 = () => (
  <Template title="Grow/Shrink | Bounding Client" description="Here are examples of responsive React components using the useState, useEffect and useRef hooks from React to calculate the percentage of an element currently in the viewport or in the case of the Growing image how far from the bottom of the screen the image is. Fela css allows for the easy responsive nature of the CSS properties. Throttling is in place on each of the hooks.">
    <PaddingContainer height="50px">
      <HeadingMedium color="#008f9c">Grow</HeadingMedium>
    </PaddingContainer>
    <ResizeBC grow={true} src={images[0]} />
    <ResizeBC grow={true} src={images[1]} />
    <PaddingContainer height="50px">
      <HeadingMedium color="#008f9c">Shrink</HeadingMedium>
    </PaddingContainer>
    <ResizeBC grow={false} src={images[2]} />
    <ResizeBC grow={false} src={images[3]} />
    <PaddingContainer height="500px" />
  </Template>
);

export default Resize2;
