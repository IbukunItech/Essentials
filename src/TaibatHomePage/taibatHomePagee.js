import React from "react";
import TaibatHomePage from "./taibatHomePage";
import TaibatHomePageTwo from "./taibatHomePageTwo";
import TaibatHomePageThree from "./taibatHomePageThree";
import TaibatHomePageFour from "./taibatHomePageFour";
import styled from "styled-components";
import { BsChatDots } from "react-icons/bs";

const TaibatHomePagee = () => {
  return (
    <Container>
      <Wrapper>
        <Button // target="_blank will open the socials in a new tab"
          href="mailto: ibukunoluwafamuyiwa@gmail.com"
          target="_target"
        >
          <BsChatDots />
        </Button>
        <TaibatHomePage />
        <TaibatHomePageTwo />
      </Wrapper>
      <Wrapper>
        <TaibatHomePageThree />
        <TaibatHomePageFour />
      </Wrapper>
    </Container>
  );
};

export default TaibatHomePagee;

const Container = styled.div``;

const Wrapper = styled.div`
  flex-wrap: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.a`
  background: #eeeeee;
  color: #387546;
  position: fixed;
  right: 20px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  font-size: 35px;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;

  :hover {
    cursor: pointer;
  }
`;
