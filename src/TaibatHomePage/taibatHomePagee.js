import React from "react";
import TaibatHomePage from "./taibatHomePage";
import TaibatHomePageTwo from "./taibatHomePageTwo";
import TaibatHomePageThree from "./taibatHomePageThree";
import TaibatHomePageFour from "./taibatHomePageFour";
import styled from "styled-components";

const TaibatHomePagee = () => {
  return (
    <Container>
      <Wrapper>
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
