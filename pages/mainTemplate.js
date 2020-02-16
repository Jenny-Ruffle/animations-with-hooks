import React from "react";
import { createRenderer } from "fela";
import FelaProvider from "../utils/felaProvider";
import Head from "next/head";
import { animationData } from "../data";
import HeaderContent from "../components/Homepage/headerContent";
import Navigation from "../components/nav";

const renderer = createRenderer();

const Template = ({ children, title, description }) => (
  <FelaProvider renderer={renderer}>
    <div>
      <Head>
        <title>{title} | Animation Library</title>
      </Head>
      <Navigation animations={animationData} />
      <HeaderContent heading={title} subHeading={description} />
      {children}
    </div>
  </FelaProvider>
);

export default Template;
