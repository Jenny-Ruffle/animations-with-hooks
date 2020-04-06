import React from 'react'
import Template from '../mainTemplate.js'
import FadeComponent from '../../components/FadeIO'
import ioArray from '../../data/io-array'

const FadeIn = () => (
  <Template title="Fade In | Intersection Observer" description="Fade in component using intersection observer...">
    {ioArray.map((item, index) => (
      <FadeComponent key={index} src={item.src} id={index} country={item.country} city={item.city} />
    ))}
  </Template>
)

export default FadeIn
