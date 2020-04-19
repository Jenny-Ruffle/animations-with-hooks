import React from 'react'
import { createComponent } from 'react-fela'
import { LatinText } from '../SpacingComponents'

const image = ({index}) => ({
  width: '100%',
  position: 'sticky',
  top: `0`,
  zIndex: index * 2,
  height: '100vh',
  objectFit: 'cover'
})

const Image = createComponent(image, 'img', ['src'])

const headingGiant = () => ({
  width: '100%',
  textAlign: 'center',
  color: 'white',
  font: '96px/140px Verdana, serif',
  marginBottom: '40px'
})

const HeadingGiant = createComponent(headingGiant, 'div', ['src'])

const raisedTextContent = ({index}) => ({
  width: '100%',
  zIndex: (index + 1) * 2,
  position: 'relative',
})

const RaisedTextContent = createComponent(raisedTextContent, 'div', ['src'])

const Text = ({city, country, index}) => (
  <RaisedTextContent index={index}>    
    <HeadingGiant index={index}>{city}, {country}</HeadingGiant>
    <LatinText extraStyles={{backgroundColor: 'white', borderRadius: '3px', padding: '20px', margin: 0}}/>
    <LatinText extraStyles={{backgroundColor: 'white', borderRadius: '3px', padding: '20px', margin: 0}}/>
    <LatinText extraStyles={{backgroundColor: 'white', borderRadius: '3px', padding: '20px', margin: 0}}/>
    <LatinText extraStyles={{backgroundColor: 'white', borderRadius: '3px', padding: '20px', margin: 0}}/>
  </RaisedTextContent>
)


const ParallaxImage = ({ src, id, country, city, index }) => {
return(
  <>
    <Image src={src} index={index} />
    <Text city={city} country={country} index={index} />
  </>
)
}

export default ParallaxImage
