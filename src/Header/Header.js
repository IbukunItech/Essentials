import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Wrapper>
        <Input
          placeholder="Search artisan"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>Search </Button>
      </Wrapper>
    </Container>
  );
};

export default Header;
const Button = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin: 0 10px;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
`;
const Input = styled.input`
  width: 250px;
  height: 35px;
  border: 1px solid lightgray;
  outline: none;
  border-radius: 5px;
  padding-right: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;

  // height: 60px;
`;
const Container = styled.div`
  // height: 80px;
`;
