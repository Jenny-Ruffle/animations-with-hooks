import React from 'react'
import { createComponent } from 'react-fela'

const slideContainer = () => ({
  scrollSnapType: 'y proximity',
  position: 'relative',
  overflow: 'scroll',
  height: '100vh'
})

const SlideContainer = createComponent(slideContainer, 'div')

const slideWrapper = ({ zIndex }) => ({
  width: '100%',
  scrollSnapAlign: 'start',
  position: 'sticky',
  top: 0,
  height: '100vh',
  overflow: 'hidden',
  zIndex
})

const SlideWrapper = createComponent(slideWrapper, 'div')

const slideImage = () => ({
  width: '100%',
  objectFit: 'cover',
  height: '100vh'
})
const SlideImage = createComponent(slideImage, 'img', ['src'])

const Slide = ({ key, zIndex, imageSrc }) => {
  return (
    <SlideWrapper key={key} zIndex={zIndex}>
      <SlideImage src={imageSrc} />
    </SlideWrapper>
  )
}

const StickySlides = ({ images }) => (
  <SlideContainer>
    {images.map((item, index) => (
      <Slide key={index} zIndex={(index + 1) * 2} imageSrc={item} />
    ))}
  </SlideContainer>
)

export default StickySlides
