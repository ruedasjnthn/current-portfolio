import { useState, useEffect } from "react";

import tw from "tailwind-styled-components";
import Button from "./button";

import { getStaticProps } from "../helper/contentful";

const Portfolio = () => {
  const [content, setContent] = useState<[]>();

  const handleClick = (url: string) => window.open(url, "_blank");

  useEffect(() => {
    getStaticProps("project").then((project: any) => setContent(project));
  }, []);

  return (
    <Container id="portfolio">
      <Divider />
      <Title>Featured Projects</Title>
      <Desc>Projects I have dabbled with</Desc>
      {content
        ?.sort((a: any, b: any) => (a.fields.id > b.fields.id ? 1 : -1))
        .map((data: any) => (
          <ProjectContainer key={data.fields.id}>
            <ImageContainer>
              <Thumbnail src={"https:" + data.fields.image.fields.file.url} />
            </ImageContainer>
            <InfoContainer>
              <ProjectTitle>{data.fields.title}</ProjectTitle>
              <ProjectDesc>{data.fields.desc}</ProjectDesc>
              <TechstackTitle>Techstack:</TechstackTitle>
              <TechStackContent>{data.fields.techstack}</TechStackContent>
              <ButtonContainer>
                {data.fields.site ? (
                  <Button
                    onClick={() => handleClick(data.fields.site)}
                    type="button"
                  >
                    Live Site
                  </Button>
                ) : null}
                {data.fields.sourceCode ? (
                  <Button
                    onClick={() => handleClick(data.fields.sourceCode)}
                    type="button"
                  >
                    Source Code
                  </Button>
                ) : null}
              </ButtonContainer>
            </InfoContainer>
          </ProjectContainer>
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
`;

const ProjectContainer = tw.div`
  flex
  flex-col
  justify-center
  pt-12
  lg:flex-row-reverse
`;

const InfoContainer = tw.div`
max-w-[618px]
leading-relaxed
mx-auto
lg:max-w-[340px]
lg:ml-0
`;

const ProjectTitle = tw.h1`
  text-white
  font-bold
  text-3xl
  mb-4
`;

const ProjectDesc = tw.div`
  text-secondary
  mb-4
`;

const TechstackTitle = tw.span`
  text-white
  font-bold
  mr-1
`;

const TechStackContent = tw.span`
  text-secondary
`;

const ButtonContainer = tw.div`
  mt-4
  flex
  gap-4
`;

const ImageContainer = tw.div`
  mx-auto
  mb-8
`;

const Thumbnail = tw.img`
  block
  max-w-auto
  max-h-[300px]
  lg:max-h-[400px]
  max-w-[600px]
  rounded-lg
`;

export default Portfolio;
