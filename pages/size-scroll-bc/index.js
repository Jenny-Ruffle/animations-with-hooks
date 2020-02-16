import React from "react";
import Template from "../mainTemplate.js";
import images from "../../data/images";
import ResizeBC from "../../components/ResizeBC";
import { HeadingMedium } from "../../components/StyledText";
import { PaddingContainer } from "../../components/SpacingComponents";

const Resize2 = () => (
  <Template title="Grow/Shrink | Bounding Client" description="">
    <PaddingContainer height="100px">
      <HeadingMedium color="#ff9a17">Grow</HeadingMedium>
    </PaddingContainer>
    <ResizeBC grow={true} src={images[0]} />
    <ResizeBC grow={true} src={images[1]} />
    <PaddingContainer height="100px">
      <HeadingMedium color="#ff9a17">Shrink</HeadingMedium>
    </PaddingContainer>
    <ResizeBC grow={false} src={images[2]} />
    <ResizeBC grow={false} src={images[3]} />
    <PaddingContainer height="500px" />
  </Template>
);

export default Resize2;
