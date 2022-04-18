import { useState, useEffect } from "react";

import tw from "tailwind-styled-components";

import { getStaticProps } from "../helper/contentful";

const TechStack = () => {
  const [content, setContent] = useState<any>();

  useEffect(() => {
    getStaticProps(techstack).then((skills: any) => setContent(skills));
  }, []);

  return (
    <Container>
      <Divider />
      <Title>Techstack</Title>
      <SkillContainer>
        {content
          ?.sort((a: any, b: any) => (a.fields.id > b.fields.id ? 1 : -1))
          .map((data: any) => (
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
              <SkillTitle>{data.fields.skill}</SkillTitle>
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
  mb-8
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
  flex-wrap
  gap-4
`;

const Skill = tw.div`

`;

const Icon = tw.div`
  w-12
  h-12
  flex
  mx-auto
  lg:w-16
  lg:h-16
  `;

const SkillTitle = tw.div`
  whitespace-nowrap
  text-center
  text-secondary
  text-sm
`;

export default TechStack;
