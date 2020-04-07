import React, {useRef, useEffect} from 'react'
import { createComponent } from 'react-fela'
import { useIntersectionObserver } from '../../utils/useIntersectionObserver'
import { HeadingLarge, HeadingMedium } from '../StyledText'

const fadeText = () => ({
  width: '40%',
  paddingTop: '30px',
})

const FadeText = createComponent(fadeText, 'div')

const fadeImage = () => ({
  width: '40%',
})

const FadeImage = createComponent(fadeImage, 'img', ['src'])

const fadeContainer = ({intersectionRatio}) => ({
  opacity: intersectionRatio,
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
  margin: '45px 0',
})

const FadeContainer = createComponent(fadeContainer, 'div', ['id', 'innerRef'])

const Text = ({ country, city }) => {
  return (
    <FadeText>
      <HeadingLarge> {city} </HeadingLarge> <HeadingMedium> {country} </HeadingMedium>{' '}
    </FadeText>
  )
}

const Image = ({ src }) => <FadeImage src={src} alt="Image alt" />

const FadeComponent = ({ src, id, country, city }) => {
  const elementRef = useRef(null);
  const [intersectionRatio, entry] = useIntersectionObserver(elementRef, {
    threshold: 0
  });

  if (id % 2 === 0) {
    return (
      <FadeContainer innerRef={elementRef} intersectionRatio={intersectionRatio} id={id} key={id}>
        <Text country={country} city={city} /> <Image src={src} />{' '}
      </FadeContainer>
    )
  }
  return (
    <FadeContainer innerRef={elementRef} intersectionRatio={intersectionRatio} id={id} key={id}>
      <Image src={src} /> <Text country={country} city={city} />{' '}
    </FadeContainer>
  )
}

export default FadeComponent
