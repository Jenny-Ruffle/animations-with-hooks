import React from "react";
import Template from "../mainTemplate.js";
import images from "../../data/images";
import ResizeBC from "../../components/ResizeBC";
import { HeadingLarge } from "../../components/StyledText";
import { PaddingContainer } from "../../components/SpacingComponents";

const Resize2 = () => (
  <Template
    title="Grow/Shrink | Bounding Client"
    description="Resize component with bounding client..."
  >
    <PaddingContainer height="400px">
      <HeadingLarge color="#ff9a17">Grow in</HeadingLarge>
    </PaddingContainer>
    <ResizeBC grow={true} src={images[0]} />
    <ResizeBC grow={true} src={images[1]} />
    <PaddingContainer height="200px">
      <HeadingLarge color="#ff9a17">Shrink</HeadingLarge>
    </PaddingContainer>
    <ResizeBC grow={false} src={images[2]} />
    <ResizeBC grow={false} src={images[3]} />
    <PaddingContainer height="500px" />
  </Template>
);

export default Resize2;
