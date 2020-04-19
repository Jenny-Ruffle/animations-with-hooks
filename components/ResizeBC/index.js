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

const imageContainer = ({ width = '100%' }) => ({
  width
})

const ImageContainer = createComponent(imageContainer, 'div', ['innerRef'])

const styledImage = () => ({
  width: '100%'
})

const StyledImage = createComponent(styledImage, 'img', ['src'])

const getShrinkingWidth = (boundingClient, screenHeight) => {
  const onScreenRatio = (boundingClient.top + boundingClient.height) / screenHeight
  const percentageChange = onScreenRatio < 1 ? onScreenRatio * 30 : 30
  return 70 + percentageChange
}

const getGrowingWidth = (boundingClient, screenHeight) => {
  const onScreenRatio = boundingClient.top / screenHeight
  const percentageChange = onScreenRatio < 1 ? onScreenRatio * 30 : 30
  return 100 - percentageChange
}

const ImageWrapper = ({ children, grow }) => {
  const ref = useRef()
  const boundingClient = useBoundingClient(ref)
  const screenHeight = useScreenHeight().height
  const width = grow ? getGrowingWidth(boundingClient, screenHeight) : getShrinkingWidth(boundingClient, screenHeight)
  return (
    <ImageContainer width={`${width}%`} innerRef={ref}>
      {children}
    </ImageContainer>
  )
}

const ResizeBC = ({ grow, src }) => {
  return (
    <Container>
      <ImageWrapper grow={grow}>
        <StyledImage src={src} />
      </ImageWrapper>
    </Container>
  )
}

export default ResizeBC
