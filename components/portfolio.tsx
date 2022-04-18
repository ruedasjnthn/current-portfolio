import { useState, useEffect } from "react";

import tw from "tailwind-styled-components";

import { getStaticProps } from "../helper/contentful";



const Portfolio = () => {
  const [content, setContent] = useState<any>();

  useEffect(() => {
    getStaticProps(project).then((project: any) => setContent(project));
  }, []);

  return (
    <Container>
      <Divider />
      <Title>Portfolio</Title>
    </Container>
  );
};

const Container = tw.div`
  py-12
`;

const Title = tw.div`
  text-3xl
  font-bold
  text-white
  mb-8
`;

const Divider = tw.div`
  w-12
  h-2
  rounded-lg
  bg-theme
  mb-1
`;


export default Portfolio;
