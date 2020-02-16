import { createComponent } from 'react-fela'

const headingLarge = ({ color = 'black', fontWeight = 'normal' }) => ({
  font: '26px/30px Courier New, serif',
  margin: '0 0 16px 0',
  padding: 0,
  color,
  fontWeight
})

export const HeadingLarge = createComponent(headingLarge, 'h1')

const headingMedium = ({ color = 'black', fontWeight = 'normal' }) => ({
  font: '18px/22px Courier New, serif',
  margin: '0 0 16px 0',
  padding: 0,
  color,
  textDecoration: 'none',
  fontWeight
})

export const HeadingMedium = createComponent(headingMedium, 'h1')

const paragraph = () => ({
  font: '12px/18px Verdana, serif',
  margin: '0 0 16px 0',
  padding: 0,
  fontColor: 'black'
})

export const Paragraph = createComponent(paragraph, 'p')
