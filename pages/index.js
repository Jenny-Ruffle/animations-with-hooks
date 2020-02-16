import React from 'react'
import { createRenderer } from 'fela'
import Head from 'next/head'
import FelaProvider from '../utils/felaProvider'
import { animationData } from '../data'
import HomepageBlock from '../components/Homepage/homepageBlock.js'
import BlockContainer from '../components/Homepage/blockContainer'
import Template from './mainTemplate.js'

const Home = () => (
  <Template
    title="Home"
    description="A library for animations built using React Hooks, Intersection Observer
  and more."
  >
    <BlockContainer>
      {animationData.map((item, index) => (
        <HomepageBlock
          index={index}
          key={index}
          animationName={item.animationName}
          animationDescription={item.animationDescription}
          animationKey={item.animationKey}
        />
      ))}
    </BlockContainer>
  </Template>
)

export default Home
