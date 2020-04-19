import React from 'react'
import Template from '../mainTemplate.js'
import ParallaxImage from '../../components/ParallaxImage'
import imageArray from '../../data/imageArray'

const Parallax = () => <Template title="Parallax Image" description="One example of how position: sticky / relative can be used to create a parallax visual effect, with still images">
        <ParallaxImage key={0} src={imageArray[0].src} id={0} country={imageArray[0].country} city={imageArray[0].city} />
    </Template>

export default Parallax
