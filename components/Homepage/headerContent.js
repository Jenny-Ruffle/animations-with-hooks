import React from 'react'
import { createComponent } from 'react-fela'
import { HeadingLarge, Paragraph } from '../StyledText/index'

const headingContainer = () => ({
  width: '80%',
  textAlign: 'center',
  padding: '0 10%'
})

const HeadingContainer = createComponent(headingContainer, 'div')

const HeaderContent = ({ heading, subHeading }) => {
  return (
    <HeadingContainer>
      <HeadingLarge>{heading}</HeadingLarge>
      <Paragraph>{subHeading}</Paragraph>
    </HeadingContainer>
  )
}
export default HeaderContent
