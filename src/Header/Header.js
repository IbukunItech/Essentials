import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Asset/logo.JPG";
import { MdArrowDropDown } from "react-icons/md";
import Dropdown from "./Dropdown";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const onMouseEnter = () => {
    if (window.innerHeight < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerHeight < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <First>
          <Logo src={logo} />
          <Navigation>
            <Nav>Home</Nav>
            <Nav>People</Nav>
            <Nav>Settings</Nav>
          </Navigation>
        </First>
        <Center>
          <All>
            <Text>All </Text>
            <Icon
              onClick={handleClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <MdArrowDropDown />
              {dropdown ? <Dropdown /> : null}
            </Icon>
          </All>
          <Input placeholder="Search for Artisan" />
          <Submit>Submit</Submit>
        </Center>

        <Login>
          <Button>Join here</Button>
        </Login>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Text = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

const Icon = styled.div`
  font-size: 30px;
  margin-top: 5px;
`;

const Login = styled.div`
  margin-right: 10px;
`;

const Button = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 3px;
  background: linear-gradient(130deg, green, white);

  //   background: linear-gradient(
  //     100deg,
  //     rgba(63, 63, 63, 0.8) 0%,
  //     rgba(255, 255, 255, 0) 25%
  //   );
  font-size: 23px;
  font-weight: bold;
  font-family: helretica;
  transition: all 350ms ease-in-out;
  transform: scale(1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: helretica;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
    background: linear-gradient(130deg, white, green);
  }
`;

const Center = styled.div`
  display: flex;
  height: 60px;
  border-radius: 50px;
  background-color: transparent;
  margin-right: 150px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.7);
  font-family: helretica;
`;

const All = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 250px;
  height: 100%;
  margin: 0 15px;
  border: 0;
  outline: none;
  background-color: transparent;
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  border-left: 1px solid rgba(255, 255, 255, 0.7);
  color: white;
  padding-left: 10px;
  font-size: 20px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Submit = styled.div`
  margin-right: 10px;
  font-size: 22px;

  :hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 70px;
  margin-left: 10px;
  object-fit: cover;
`;

const First = styled.div`
  display: flex;
  align-items: center;
`;

const Navigation = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Nav = styled.div`
  width: 110px;
  height: 50px;
  border-radius: 3px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0 5px;
  font-family: helretica;
  transition: all 400ms ease-in-out;
  transform: scale(1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  :hover {
    cursor: pointer;
    transform: scale(0.98);
    background-color: coral;
    text-decoration: underline;
    background: linear-gradient(130deg, white, green);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: green;
  //   background: linear-gradient(180deg, green, lightgreen);
  color: white;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

{
  /* {dropdown && <Dropdown />} */
}
