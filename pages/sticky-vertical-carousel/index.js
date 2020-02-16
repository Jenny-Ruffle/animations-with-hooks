import React from "react";
import Template from "../mainTemplate.js";
import images from "../../data/images";
import StickyCarousel from "../../components/StickyVerticalCarousel";

const StickyCarouselPage = () => (
  <Template title="Sticky Carousel" description="">
    <StickyCarousel images={images} />
  </Template>
);

export default StickyCarouselPage;
