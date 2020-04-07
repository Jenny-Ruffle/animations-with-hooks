import React, {useRef, useEffect} from 'react'
import { createComponent } from 'react-fela'
import { useIntersectionObserver } from '../../utils/useIntersectionObserver'
import { HeadingLarge, HeadingMedium } from '../StyledText'

const resizeText = () => ({
  width: '40%',
  paddingTop: '30px',
})

const ResizeText = createComponent(resizeText, 'div')

const resizeImage = ({intersectionRatio}) => ({
  width: `${intersectionRatio*10 + 30}%`
})

const ResizeImage = createComponent(resizeImage, 'img', ['src'])

const resizeContainer = () => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
  margin: '45px 0',
})

const ResizeContainer = createComponent(resizeContainer, 'div', ['id', 'innerRef'])

const Text = ({ country, city }) => {
  return (
    <ResizeText>
      <HeadingLarge> {city} </HeadingLarge> <HeadingMedium> {country} </HeadingMedium>{' '}
    </ResizeText>
  )
}

const Image = ({intersectionRatio, src }) => <ResizeImage intersectionRatio={intersectionRatio} src={src} alt="Image alt" />

const ResizeComponent = ({ src, id, country, city }) => {
  const elementRef = useRef(null);
  const [intersectionRatio, entry] = useIntersectionObserver(elementRef, {
    threshold: 0
  });

  if (id % 2 === 0) {
    return (
      <ResizeContainer innerRef={elementRef} id={id} key={id}>
        <Text country={country} city={city} /> <Image intersectionRatio={intersectionRatio} src={src} />
      </ResizeContainer>
    )
  }
  return (
    <ResizeContainer innerRef={elementRef} id={id} key={id}>
      <Image intersectionRatio={intersectionRatio} src={src} /> <Text country={country} city={city} />
    </ResizeContainer>
  )
}

export default ResizeComponent
