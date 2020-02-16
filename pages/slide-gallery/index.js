import React from 'react'
import Template from '../mainTemplate.js'
import images from '../../data/images'
import StickySlides from '../../components/StickySlides'

const Slides = () => (
  <Template title="Slide Gallery" description="...">
    <StickySlides images={images} />
  </Template>
)

export default Slides
