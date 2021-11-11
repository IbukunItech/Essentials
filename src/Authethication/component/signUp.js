import React, { useState } from "react";
import styled from "styled-components";
import { useSignUp } from "../hooks/useSignUp";
import { Loaders } from "../hooks/Loaders";
const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, isError } = useSignUp();

  const signUp = () => {
    signup(email, password, displayName);
    console.log(email, password, displayName);
  };
  return (
    <Container>
      <Wrapper>
        <InputHolder>
          <Input
            type="text"
            placeholder=" Username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Input
            type="email"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="
             Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLoading && <Button onClick={signUp}>Sign up</Button>}

          {isLoading && (
            <Button style={{ display: "flex" }}>
              Signing Up <Loaders />
            </Button>
          )}
          {isError && <p>{isError}</p>}
        </InputHolder>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-heigh: 100vh;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const InputHolder = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
  outline: none;
  padding: 0 5px;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 0;
  outline: none;
  background: #101522;
  margin-top: 20px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
