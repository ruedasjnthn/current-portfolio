import { useState, useEffect } from "react";

import tw from "tailwind-styled-components";
import * as Si from "react-icons/si";

import { getStaticProps } from "../helper/contentful";

// interface Skills {

// }

// interface ContentResponse {
//   content: Skills[]
// }

const TechStack = () => {
  const [content, setContent] = useState<any>();

  useEffect(() => {
    getStaticProps().then((skills: any) => setContent(skills));
  }, []);
  console.log(content);
  return (
    <Container>
      <Divider />
      <Title>Techstack</Title>
      <SkillContainer>
      {content?.sort((a: any, b: any) => (a.fields.id > b.fields.id) ? 1 : -1).map((data: any) => (
        <Skill>
          <Icon>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{data.fields.skill}</title>
              <path fill="white" d={data.fields.icon} />
            </svg>
          </Icon>
          <span>{data.fields.skill}</span>
        </Skill>
      ))}
      </SkillContainer>
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
`;

const Divider = tw.div`
  w-12
  h-2
  rounded-lg
  bg-theme
  mb-1
`;

const SkillContainer = tw.div`
  flex
  flex-row
`;

const Skill = tw.div`
  
`;

const Icon = tw.div`
  w-20
  h-20
  
`;

export default TechStack;
