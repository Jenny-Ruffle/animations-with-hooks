import React from "react";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import Head from "next/head";
import { animationData } from "../data";
import HeaderContent from "../components/Homepage/headerContent";
import Navigation from "../components/nav";

const renderer = createRenderer();

const Template = ({ children, title, description }) => (
  <RendererProvider renderer={renderer}>
    <div>
      <Head>
        <title>{title} | Animation Library</title>
      </Head>
      <Navigation animations={animationData} />
      <HeaderContent heading={title} subHeading={description} />
      {children}
    </div>
  </RendererProvider>
);

export default Template;
