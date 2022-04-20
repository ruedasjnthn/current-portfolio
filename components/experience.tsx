import { useState, useEffect } from "react";

import tw from "tailwind-styled-components";

import { getStaticProps } from "../helper/contentful";

const Experience = () => {
  const [content, setContent] = useState<any>();

  useEffect(() => {
    getStaticProps("experience").then((experience: any) =>
      setContent(experience)
    );
  }, []);

  return (
    <Container id="experience">
      <Divider />
      <Title>Experience</Title>
      <Desc>
        Got an opportunity to work on a startup company and volunteer in a
        health organization
      </Desc>
      {content
        ?.sort((a: any, b: any) => (a.fields.id > b.fields.id ? 1 : -1))
        .map((data: any) => (
          <ExperienceContainer>
            <Position>{data.fields.position}</Position>
            <Company>{data.fields.company}</Company>
            <Bullet>&#8226;</Bullet>
            <EmploymentType>{data.fields.employmentType}</EmploymentType>
            <Date>{data.fields.date}</Date>
            <WorkDesc>{data.fields.description}</WorkDesc>
          </ExperienceContainer>
        ))}
    </Container>
  );
};

const Container = tw.div`
  py-12
`;

const Divider = tw.div`
w-12
h-2
rounded-lg
bg-theme
mb-1
`;

const Title = tw.div`
  text-3xl
  font-bold
  text-white
  mb-8
`;

const Desc = tw.p`
text-secondary
mb-8
`;

const ExperienceContainer = tw.div`
  
`;

const Position = tw.h1`
  text-3xl
  text-white
  font-bold
  leading-relaxed
`;

const Company = tw.span`
  text-white
  leading-relaxed
  mr-1
`;

const Bullet = tw.span`
  text-white
`;

const EmploymentType = tw.span`
  text-white
  leading-relaxed
  ml-1
`;

const Date = tw.p`
  text-secondary
  leading-relaxed
`;

const WorkDesc = tw.p`
  text-secondary
  leading-relaxed
`;

export default Experience;
