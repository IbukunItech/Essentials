import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Text>MEET AN ARTISAN - CALL </Text>

          <Icon>
            <MdCall />
          </Icon>
          <Number>+2348000000000</Number>
        </Section>

        <Last>
          <IconHolder>
            <Icon>
              <FaFacebook />
            </Icon>
            <Icon>
              <AiFillTwitterCircle />
            </Icon>
            <Icon>
              <FaInstagramSquare />
            </Icon>
            <Icon>
              <BsLinkedin />
            </Icon>

            <Icon>
              <MdOutlineMail />
            </Icon>
          </IconHolder>
          <Contact>
            <Nav>Contact Us</Nav>

            <Nav>About</Nav>
          </Contact>
        </Last>
      </Wrapper>
    </Container>
  );
};

export default Footer;
const IconHolder = styled.div`
  display: flex;
  align-items: center;
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  color: #db9b34;
`;

const Container = styled.div`
  margin-top: 20px;
  background: #387546;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  // display: block;
  // margin-top: 20px;
  width: 100%;
  height: 200px;
`;

const Section = styled.div`
  align-items: center;
  margin-bottom: 10px;
  display: flex;
  display-flex: wrap;
  justify-content: center;
  margin-top: 50px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-top: 5px;
  padding-left: 25px;
  margin-right: 10px;
  color: #db9b34;
`;

const Icon = styled.div`
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 40px;
  margin: 0 10px;
  color: #db9b34;
`;
const Last = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
`;

const Number = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-left: 10px;
  color: #db9b34;
`;
