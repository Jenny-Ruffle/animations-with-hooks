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

const paragraph = ({extraStyles = {}}) => ({
  font: '12px/18px Verdana, serif',
  padding: 0,
  margin: '0 0 16px 0',
  fontColor: 'black',
  ...extraStyles
})

export const Paragraph = createComponent(paragraph, 'p')

const codeSnippet = () => ({
  font: '12px/16px Courier, serif',
  margin: '10px',
  padding: '10px',
  fontColor: 'black',
  backgroundColor: '#f5f5f5',
  border: '1px dotted lightgrey',
  borderRadius: '6px'
})

export const CodeSnippet = createComponent(codeSnippet, 'p')
