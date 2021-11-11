import React, { useState } from "react";
import styled from "styled-components";
import { useLogin } from "../hooks/useLogin";
import { Loaders } from "../hooks/Loaders";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { Login, isError, isPending } = useLogin();

  const login = () => {
    console.log("clicked", email, password);
    Login(email, password);
  };

  return (
    <Container>
      <Wrapper>
        <InputHolder>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPending && <Button onClick={login}>Sign In</Button>}
          {isPending && (
            <Button style={{ display: "flex" }}>
              Logging in <Loaders />
            </Button>
          )}
          {isError && <p>{isError}</p>}
        </InputHolder>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
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
