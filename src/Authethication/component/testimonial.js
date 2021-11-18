import React from "react";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import img from "../../Asset/josh1.jpg";
import img2 from "../../Asset/dom2.jpg";

const Testimonials = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Testimonials</Title>
          <Desc>
            What customers have to say about <span>Essentials</span>
          </Desc>
        </Content>
        <Section>
          <CardHolder1>
            <Image1 src={img} />
            <Card1>
              <Quote>
                <FaQuoteRight />
              </Quote>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever
              </Text>
              <Name>Babalola Joseph</Name>
            </Card1>
          </CardHolder1>
          <CardHolder2>
            <Image2 src={img2} />
            <Card2>
              <Quote>
                <FaQuoteRight />
              </Quote>
              <Text2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever
              </Text2>
              <Name2>Jessica Udeh</Name2>
            </Card2>
          </CardHolder2>
        </Section>
        <Dot>
          <Dot1>
            <GoPrimitiveDot />
          </Dot1>
          <Dot2>
            <GoPrimitiveDot />
          </Dot2>
          <Dot3>
            <GoPrimitiveDot />
          </Dot3>
        </Dot>
      </Wrapper>
    </Container>
  );
};
export default Testimonials;

const Section = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 70px 0 0 0;
`;
const Quote = styled.div`
  font-size: 25px;
  color: #387546;
  padding: 20px;
  font-weight: 900;
  display: inline-block;
  font-style: normal;
  text-rendering: auto;
  line-height: 1;
  font-variant: normal;
  padding-left: 40px;
`;
const Desc = styled.div`
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  padding: 5px 20px 0 0;

  span {
    font-weight: bold;
    color: #387546;
  }
`;
const CardHolder1 = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
`;

const CardHolder2 = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card1 = styled.div`
  width: 430px;
  height: 300px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  border: none;
  margin-right: -45px;
  padding-top: 30px;
  padding-left: 25px;
  padding-bottom: -30px;
`;

const Card2 = styled.div`
  width: 480px;
  height: 300px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  border: none;
  padding-left: 30px;
  margin-left: -45px;
  padding-top: 30px;
  padding-bottom: -30px;
`;
const Image1 = styled.img`
  position: absolute;
  width: 100px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  background-color: grey;
  margin-left: -400px;
`;
const Image2 = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  background-color: grey;
  margin-left: -480px;

  :hover {
    // border: white;
  }
`;
const Title = styled.div`
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #6c757d;
  font-weight: bold;
  color: #387546;
  opacity: 1;
  text-align: center;
  line-height: 1;
  padding: 50px 0 0 0;
`;
const Name = styled.div`
  font-size: 15px;
  font-weight: 900;
  font-family: roboto;
  padding-left: 40px;
  padding-top: 20px;
  margin: 50px 50px 0 0;
`;

const Name2 = styled.div`
  font-size: 15px;
  font-weight: 900;
  font-family: roboto;
  padding-left: 40px;
  padding-top: 20px;
  margin: 50px 50px 0 0;
`;
const Content = styled.div`
  padding-top: 20px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  // background-color: lightblue;
`;
const Wrapper = styled.div`
  padding: 20px 20px 10px 0;
`;
const Text = styled.div`
    color: #656565;
    font-size: 18px;
    // line-height: 5px;
    font-family: poppins;
    padding-top: 15px;
    padding-left: 40px;
    padding-right: 30px;
}
`;
const Text2 = styled.div`
    color: #656565;
    font-size: 18px;
    // line-height: 5;
    font-family: poppins;
    padding-top: 20px;
    padding-left: 40px;
    // margin-bottom: 50px;
    padding-right: 30px;
}
`;
const Dot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dot1 = styled.div`
  background-color: white;
  color: grey;
  font-size: 8px;
  border: none;

  :hover {
    cursor: pointer;
    color: blue;
    font-size: 15px;
  }
`;
const Dot2 = styled.div`
  background-color: white;
  color: grey;
  font-size: 8px;
  border: none;

  :hover {
    cursor: pointer;
    color: blue;
    font-size: 15px;
  }
`;
const Dot3 = styled.div`
  background-color: white;
  color: grey;
  font-size: 8px;
  border: none;

  :hover {
    cursor: pointer;
    color: blue;
    font-size: 15px;
  }
`;
