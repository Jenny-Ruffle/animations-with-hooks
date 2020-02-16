import { useState, useEffect } from 'react'
import throttle from 'lodash/fp/throttle'

function getHeight() {
  return {
    height: window.innerHeight
  }
}

export default () => {
  const [height, setHeight] = useState(0)

  const handleResize = throttle(250, () => {
    setHeight(getHeight())
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    setHeight(getHeight())
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return height
}
