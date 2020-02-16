import React from "react";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import Head from "next/head";
import { animationData } from "../data";
import HomepageBlock from "../components/Homepage/homepageBlock.js";
import BlockContainer from "../components/Homepage/blockContainer";
import HeaderContent from "../components/Homepage/headerContent";
import Navigation from "../components/nav";

const renderer = createRenderer();

const Home = () => (
  <RendererProvider renderer={renderer}>
    <div>
      <Head>
        <title>Home | Animation Library</title>
      </Head>
      <Navigation animations={animationData} />
      <HeaderContent
        heading="Animation Library"
        subHeading="A library for animations built using React Hooks, Intersection Observer
        and more."
      />
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
    </div>
  </RendererProvider>
);

export default Home;
