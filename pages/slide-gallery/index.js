import React from 'react'
import Template from '../mainTemplate.js'
import images from '../../data/images'
import StickySlides from '../../components/StickySlides'

const Slides = () => (
  <Template title="Slide Gallery" description="Parallax style slides making use of CSS position: sticky and scroll-snapping">
    <StickySlides images={images} />
  </Template>
)

export default Slides
