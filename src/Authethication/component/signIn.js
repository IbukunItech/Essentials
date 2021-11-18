import React, { useState } from "react";
import styled from "styled-components";
import { useLogin } from "../hooks/useLogin";
import { Loaders } from "../hooks/Loaders";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";

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
        <InputCard>
          <SignInText>
            <Text>Welcome Back!</Text>
          </SignInText>
          <InputHolder>
            <Inputts>
              <AiOutlineMail />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Inputts>
            <Inputts>
              <AiOutlineLock />
              <Input
                type="password"
                placeholder="
             Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Inputts>
            {!isPending && <Button onClick={login}>Sign In</Button>}
            {isPending && (
              <Button style={{ display: "flex" }}>
                Logging in <Loaders />
              </Button>
            )}
            {isError && <Err>{isError}</Err>}
            <div>
              New to <span style={{ color: "#387546", fontWeight: "bold" }}>Essentials</span>{" "}
            </div>
            <Div to="/signup">Join Now!</Div>
          </InputHolder>
        </InputCard>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
const Div = styled(Link)`
  text-decoration: none;
  color: #387546;
  margin: 10px;
`;
const InputCard = styled.div`
  width: 400px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 50px 0;
  background: white;
`;
const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
`;
const SignInText = styled.div``;
const Err = styled.div`
  text-align: left;
  font-size: 14px;
  color: red;
`;

const Inputts = styled.div`
  width: 250px;
  height: 40px;
  border: 1px solid lightgray;
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 87.5vh;
  background: #387546;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-height: 87.4vh;
`;

const InputHolder = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 220px;
  height: 40px;
  margin-bottom: 10px;
  outline: none;
  padding: 0 5px;
  border: 0;
  left: 28px;
  top: 0px;
  font-size: 16px;
  position: absolute;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 0;
  outline: none;
  background: #387546;
  margin: 20px 0;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
