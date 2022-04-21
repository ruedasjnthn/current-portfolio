import Link from "next/link";
import { useState } from "react";

import tw from "tailwind-styled-components";
import Button from "./button";

const Header = () => {
  const [click, setClick] = useState<Boolean>(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <Logo>Jonathan Ruedas</Logo>
      <Nav $active={click}>
        <NavItem>
          <Link href="#home">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#portfolio">
            Portfolio
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#experience">
            Experience
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#hire" passHref>
            <Button type="button">Hire me</Button>
          </Link>
        </NavItem>
      </Nav>
      <Menu onClick={handleClick}>
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
            fill="white"
          />
        </svg>
      </Menu>
    </Container>
  );
};

interface StyleProps {
  $active: Boolean
}

const Container = tw.div`
  flex
  items-center
  justify-between
  py-6
`;

const Logo = tw.h1`
  text-lg
  font-bold
  text-white
  cursor-pointer
  hover:text-selected-text
`;

const Menu = tw.div`
  cursor-pointer
  lg:hidden
`;

const Nav = tw.ul<StyleProps>`
  ${(p:any) => (p.$active ? "block" : "hidden")}
  absolute
  top-[76px]
  left-0
  w-full
  py-4
  z-10
  bg-input
  lg:static
  lg:w-auto
  lg:flex
  lg:items-center
  lg:py-0
  lg:bg-transparent
`;

const NavItem = tw.li`
  py-4
  text-white
  text-center
  cursor-pointer
  hover:text-selected-text
  lg:ml-12
  lg:py-0
`;

export default Header;
