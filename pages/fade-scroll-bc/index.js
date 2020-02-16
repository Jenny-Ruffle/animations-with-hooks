import React from "react";
import Template from "../mainTemplate.js";
import FadeBC from "../../components/FadeBC";
import images from "../../data/images";
import { PaddingContainer } from "../../components/SpacingComponents";
import { HeadingLarge } from "../../components/StyledText";

const FadeIn2 = () => (
  <Template
    title="Fade In/Out | Bounding Client"
    description="Fade in component with bounding client..."
  >
    <PaddingContainer height="200px">
      <HeadingLarge color="#bb77f7">Fade Out</HeadingLarge>
    </PaddingContainer>
    <FadeBC fadeIn={false} src={images[0]} />
    <FadeBC fadeIn={false} src={images[1]} />
    <PaddingContainer height="200px">
      <HeadingLarge color="#bb77f7">Fade In</HeadingLarge>
    </PaddingContainer>
    <FadeBC fadeIn={true} src={images[2]} />
    <FadeBC fadeIn={true} src={images[3]} />
  </Template>
);

export default FadeIn2;
