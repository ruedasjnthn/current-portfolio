import tw from "tailwind-styled-components";

const Portfolio = () => {
  return (
    <Container>
      Portfolio
    </Container>
  );
};

const Container = tw.div`
  flex
  flex-wrap
  justify-center
  py-12
  lg:flex-row
`;


export default Portfolio;
