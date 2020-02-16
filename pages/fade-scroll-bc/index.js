import React from "react";
import Template from "../mainTemplate.js";
import FadeBC from "../../components/FadeBC";
import images from "../../data/images";
import { PaddingContainer } from "../../components/SpacingComponents";
import { HeadingMedium } from "../../components/StyledText";

const FadeIn2 = () => (
  <Template
    title="Fade In/Out | Bounding Client"
    description="Fade in component with bounding client..."
  >
    <PaddingContainer height="100px">
      <HeadingMedium color="#bb77f7">Fade Out</HeadingMedium>
    </PaddingContainer>
    <FadeBC fadeIn={false} src={images[0]} />
    <FadeBC fadeIn={false} src={images[1]} />
    <PaddingContainer height="100px">
      <HeadingMedium color="#bb77f7">Fade In</HeadingMedium>
    </PaddingContainer>
    <FadeBC fadeIn={true} src={images[2]} />
    <FadeBC fadeIn={true} src={images[3]} />
  </Template>
);

export default FadeIn2;
