import React from 'react'
import { createComponent } from 'react-fela'

const stickyContainer = () => ({
  position: 'relative',
  display: 'flex',
  width: '100%'
})

const StickyContainer = createComponent(stickyContainer, 'div')

const stickyColumn = () => ({
  width: '50%',
  position: 'sticky',
  top: 0,
  height: 'max-content',
  display: 'block',
  justifyContent: 'center'
})

const StickyColumn = createComponent(stickyColumn, 'div')

const imageBlock = () => ({
  width: '100%',
  height: '100vh',
  objectFit: 'cover'
})

const ImageBlock = createComponent(imageBlock, 'img', ['src'])

const slideWrapper = () => ({
  width: '100%',
  height: '100vh',
  padding: '25% 25% '
})
const SlideWrapper = createComponent(slideWrapper, 'div')

const slideImage = () => ({
  width: '50%',
  height: '50%',
  objectFit: 'cover'
})
const SlideImage = createComponent(slideImage, 'img', ['src'])

const Slide = ({ imageSrc }) => {
  return (
    <SlideWrapper>
      <SlideImage src={imageSrc} />
    </SlideWrapper>
  )
}

const StickyCarousel = ({ images }) => (
  <StickyContainer>
    <StickyColumn>
      <ImageBlock src={images[0]} />
    </StickyColumn>
    <StickyColumn>
      <Slide imageSrc={images[1]} />
      <Slide imageSrc={images[2]} />
      <Slide imageSrc={images[3]} />
    </StickyColumn>
  </StickyContainer>
)

export default StickyCarousel
