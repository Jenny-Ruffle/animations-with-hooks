import React from 'react'
import Template from '../mainTemplate.js'
import ShiftingParallaxImage from '../../components/ShiftingParallaxImage'
import imageArray from '../../data/imageArray'

const ShiftingParallax = () => <Template title="Shifting Parallax Image" description="Another parallax example using position: sticky / relative to create a shifting parallax visual effect, along with using react hooks checking the boundingClientRect and position of the next element across the screen">
        {imageArray.map((item)=><ShiftingParallaxImage key={0} src={item.src} id={0}/>
)}
    </Template>

export default ShiftingParallax
