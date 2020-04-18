import React, { useRef, useEffect } from 'react'
import { createComponent } from 'react-fela'
import { useIntersectionObserver } from '../../utils/useIntersectionObserver'
import { HeadingLarge, HeadingMedium } from '../StyledText'

const resizeText = () => ({
  width: '40%',
  paddingTop: '30px',
})

const ResizeText = createComponent(resizeText, 'div')

const image = () => ({
  width: '100%',
})

const Image = createComponent(image, 'img', ['src'])

const imageContainer = ({ intersectionRatio = 0 }) => ({
  width: `${intersectionRatio * 2 + 38}%`,
})

const ImageContainer = createComponent(imageContainer, 'div')

const container = () => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '340px',
  margin: '45px 0',
})

const Container = createComponent(container, 'div', ['id', 'innerRef'])

const Text = ({ country, city }) => {
  return (
    <ResizeText>
      <HeadingLarge> {city} </HeadingLarge> <HeadingMedium> {country} </HeadingMedium>{' '}
    </ResizeText>
  )
}

const ResizingImage = ({ intersectionRatio, src }) => (
  <ImageContainer intersectionRatio={intersectionRatio}>
    <Image src={src} alt="Image alt" />
  </ImageContainer>
)

const ResizeComponent = ({ src, id, country, city }) => {
  const elementRef = useRef(null)
  const [intersectionRatio, entry] = useIntersectionObserver(elementRef, {
    threshold: 0,
  })

  if (id % 2 === 0) {
    return (
      <Container innerRef={elementRef} id={id} key={id}>
        <Text country={country} city={city} /> <ResizingImage intersectionRatio={intersectionRatio} src={src} />
      </Container>
    )
  }
  return (
    <Container innerRef={elementRef} id={id} key={id}>
      <ResizingImage intersectionRatio={intersectionRatio} src={src} /> <Text country={country} city={city} />
    </Container>
  )
}

export default ResizeComponent
