import type { NextPage } from "next";
import Head from "next/head";

import tw from "tailwind-styled-components";

import Header from "../components/header";
import About from "../components/about";
import TechStack from "../components/techstack";
import Portfolio from "../components/portfolio";
import Experience from '../components/experience'
import Contact from "../components/contact";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Jonathan Ruedas | Software Developer</title>
        <meta
          name="description"
          content="jonathan ruedas | software developer"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <About />
      <TechStack />
      <Portfolio />
      <Experience />
      <Contact />
    </Layout>
  );
};

export const Layout = tw.div`
  bg-body
  font-poppins
  px-8
  md:px-20
  lg:px-16
  xl:px-48
  2xl:px-64
`;

export default Home;
