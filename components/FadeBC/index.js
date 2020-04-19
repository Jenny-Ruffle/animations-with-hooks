import React, { useRef } from 'react'
import { createComponent } from 'react-fela'
import useScreenHeight from '../../utils/useScreenHeight'
import useBoundingClient from '../../utils/useBoundingClient'

const container = () => ({
  display: 'flex',
  margin: '10px 100px',
  justifyContent: 'center'
})

const Container = createComponent(container, 'div')

const imageContainer = ({ opacity = '1' }) => ({
  opacity,
  width: '100%'
})

const ImageContainer = createComponent(imageContainer, 'div', ['innerRef'])

const styledImage = () => ({
  width: '100%'
})

const StyledImage = createComponent(styledImage, 'img', ['src'])

const getFadeOutOpacity = (boundingClient, screenHeight) => {
  const onScreenRatio = (boundingClient.top + boundingClient.height) / screenHeight
  const percentageChange = onScreenRatio < 1 ? onScreenRatio : 1
  return percentageChange
}

const getFadeInOpacity = (boundingClient, screenHeight) => {
  const onScreenRatio = boundingClient.top / screenHeight
  const percentageChange = onScreenRatio < 1 ? onScreenRatio : 1
  return 1 - percentageChange
}

const ImageWrapper = ({ children, fadeIn }) => {
  const ref = useRef()
  const boundingClient = useBoundingClient(ref)
  const screenHeight = useScreenHeight().height
  const opacity = fadeIn ? getFadeInOpacity(boundingClient, screenHeight) : getFadeOutOpacity(boundingClient, screenHeight)
  return (
    <ImageContainer opacity={opacity} innerRef={ref}>
      {children}
    </ImageContainer>
  )
}

const FadeBC = ({ fadeIn, src }) => {
  return (
    <Container>
      <ImageWrapper fadeIn={fadeIn}>
        <StyledImage src={src} />
      </ImageWrapper>
    </Container>
  )
}

export default FadeBC
