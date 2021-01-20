import { useState, useEffect } from 'react'
import throttle from 'lodash/fp/throttle'

function getHeight() {
  return {
    height: window.innerHeight
  }
}

const useScreenHeight = () => {
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

export default useScreenHeight;
