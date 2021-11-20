import React from "react";
import styled from "styled-components";
import Log from "../Asset/logo.JPG";
import Img4 from "../Asset/painters.jpg";
import Img5 from "../Asset/plumber.jpg";
import { Link } from "react-router-dom";

const TaibatHomePage = () => {
  return (
    <Container>
      <Wrapper>
        <Card to="/maintenance">
          <CardHolder>
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
              <Title>House Maintenance</Title>
              <SubTitle>
                A maintenance technician is responsible for the upkeep of a facility, such as an
                apartment building or business office
              </SubTitle>
            </Content>
            <ImageHolder>
              <ImageFour src={Img4} />
              <ImageFive src={Img5} />
              {/* <ImageThree src={Img3} /> */}
            </ImageHolder>
            <ImageVeil>
              <span>View Page</span>
            </ImageVeil>
          </CardHolder>
        </Card>
        <BottomTitle>House Maintenance</BottomTitle>
      </Wrapper>
    </Container>
  );
};

export default TaibatHomePage;

const CardHolder = styled.div`
  border: 1px solid black;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  font-family: helvetica, arial, sans-serif;
  background: black;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;
`;

const Card = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 600px;
  height: 390px;
  border: solid 0.1px #41444b;
  border-radius: 10px;
  position: relative;
  margin-right: 70px;
  transition: all 600ms;
  transform: scale(1);
  background: white;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  background: #fff;
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
  color: black;

  span {
    margin-left: 5px;
    padding-bottom: 5px;
  }
`;

const Content = styled.div`
  padding-left: 20px;
  background: #f1f1f1;
  text-align: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 7px 0;
  padding-top: 50px;
`;

const SubTitle = styled.div`
  font-size: 11px;
  font-weight: bold;
  width: 350px;
  line-height: 1.5;
  color: grey;
  padding-bottom: 50px;
  padding-left: 120px;
`;

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0 0 10px 10px;
  background: white;
`;

const ImageFour = styled.img`
  width: 220px;
  height: 140px;
  padding-top: 18px;
  padding-right: 10px;
`;

const ImageFive = styled.img`
  width: 220px;
  height: 140px;
  padding-top: 18px;
  padding-left: 10px;
`;

const BottomTitle = styled.div`
  font-weight: 350;
  font-size: 30px;
  margin: 15px 0;
  text-align: center;
  color: white;
`;

const ImageVeil = styled.div`
  width: 100%;
  height: 99%;
  top: 1px;
  color: white;
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
