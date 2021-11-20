import React from "react";
import styled from "styled-components";
import Log from "../Asset/logo.JPG";
import Img6 from "../Asset/hairs.jpg";
import Img7 from "../Asset/makeup.jpg";
import Img8 from "../Asset/fashions.jpg";
import { Link } from "react-router-dom";

const TaibatHomePage = () => {
  return (
    <Container>
      <Wrapper>
        <Card to="/fashion">
          <Heading>
            <Logo src={Log} />
            <Links>
              <MyLink>
                PAGES <span>.</span>
              </MyLink>
              <MyLink>
                STYLE <span>.</span>
              </MyLink>
              <MyLink>DOCS</MyLink>
            </Links>
          </Heading>
          <Content>
            <Title>Fashion/Beauty</Title>
            <SubTitle>
              Ultimately, a beautician's responsibility is to improve the physical appearance of
              clients and to help them to feel better about themselves.
            </SubTitle>
          </Content>
          <ImageHolder>
            <ImageSix src={Img6} />
            <ImageSeven src={Img7} />
            <ImageEight src={Img8} />
          </ImageHolder>
          <ImageVeil>
            <span>View Page</span>
          </ImageVeil>
        </Card>
        <BottomTitle>Fashion/Beauty</BottomTitle>
      </Wrapper>
    </Container>
  );
};

export default TaibatHomePage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  font-family: helvetica, arial, sans-serif;
  background: black;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
`;

const Card = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 600px;
  height: 390px;
  border: solid 0.1px #41444b;
  border-radius: 10px;
  margin-left: 70px;
  position: relative;
  transition: all 600ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  background: #000000;
  margin-top: 10px;
  border-radius: 10px;
`;

const Logo = styled.img`
  width: 100px;
  height: 40px;
  border-radius: 20px;
`;

const Links = styled.div`
  display: flex;
  margin-left: 300px;
`;

const MyLink = styled.div`
  font-size: 7px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  color: white;

  span {
    margin-left: 5px;
    padding-bottom: 5px;
  }
`;

const Content = styled.div`
  padding-left: 20px;
  margin: 50px 0;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 15px 0;
`;

const SubTitle = styled.div`
  font-size: 11px;
  font-weight: bold;
  width: 350px;
  line-height: 1.5;
  color: lightgrey;
`;

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  background: white;
`;

const ImageSix = styled.img`
  width: 150px;
  height: 140px;
`;

const ImageSeven = styled.img`
  width: 150px;
  height: 140px;
`;

const ImageEight = styled.img`
  width: 150px;
  height: 140px;
`;

const BottomTitle = styled.div`
  font-weight: 350;
  font-size: 30px;
  margin: 15px 0;
  text-align: center;
`;

const ImageVeil = styled.div`
  width: 100%;
  height: 99%;
  top: 1px;
  background: green;
  position: absolute;
  border-radius: 10px;
  background: rgb(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900px;
  transition: all 600ms;
  transform: scale(1);

  :hover {
    background: rgb(0, 0, 0, 0.7);
    transform: scale(1.03);

    span {
      opacity: 1;
    }
  }

  span {
    opacity: 0;
  }
`;
