import React, {useRef, useState, useEffect} from 'react'
import { createComponent } from 'react-fela'
import { LatinText } from '../SpacingComponents'
import throttle from 'lodash/fp/throttle'

const image = ({index, imageTop = 0}) => ({
  width: '100%',
  position: 'sticky',
  top: `${imageTop}px`,
  zIndex: index * 2,
  height: '100vh',
  objectFit: 'cover'
})

const Image = createComponent(image, 'img', ['src', 'innerRef'])

const raisedTextContent = ({index}) => ({
  width: '100%',
  zIndex: (index + 1) * 2,
  position: 'relative',
  backgroundColor: 'white',
  height: '100vh'
})

const RaisedTextContent = createComponent(raisedTextContent, 'div', ['src'])

const Text = ({ index}) => (
  <RaisedTextContent index={index}>    
    <LatinText />
    <LatinText />
  </RaisedTextContent>
)


const ShiftingParallaxImage = ({ src, id, index }) => {
  const ref = useRef()
  const [topValue, setTopValue] = useState(0)
  
  const scrollHandler = throttle(200, () => {
    if (ref.current) {
      const nextElem = ref.current.nextSibling
      if (nextElem) {
        const { top } = nextElem.getBoundingClientRect()
        const ratioNextElem = (1 - top / window.innerHeight).toFixed(8)
         setTopValue(-ratioNextElem * (window.innerHeight/2))
      }
    }
  })

  useEffect(() => {
    if (ref.current) {
      window.addEventListener('scroll', scrollHandler)
    }

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [ref, scrollHandler])

return(
  <>
    <Image src={src} index={index} imageTop={topValue} innerRef={ref}/>
    <Text index={index} />
  </>
)
}

export default ShiftingParallaxImage
