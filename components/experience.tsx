import { useState, useEffect } from "react";

import tw from "tailwind-styled-components";

import { getStaticProps } from "../helper/contentful";



const Experience = () => {
  const [content, setContent] = useState<any>();

  useEffect(() => {
    getStaticProps().then((skills: any) => setContent(skills));
  }, []);

  return (
    <Container>
      <Divider />
      <Title>Experience</Title>
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


export default Experience;
