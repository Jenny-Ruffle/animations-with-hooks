import React from 'react'
import Template from '../mainTemplate.js'
import ResizeComponent from '../../components/ResizeIO'
import imageArray from '../../data/imageArray'

const Resize = () => 
    <Template title="Grow/Shrink | Intersection Observer" description="Resize component">
        {imageArray.map((item, index) => (
            <ResizeComponent key={index} src={item.src} id={index} country={item.country} city={item.city} />
        ))}
    </Template>

export default Resize
