import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useState } from "react";
import carImg from "../Asset/CARS.jpg";
import salonImg from "../Asset/tailor.jpg";
import tyresImg from "../Asset/tyres.jpg";
import vulcaImg from "../Asset/fash.jpg";
import tailorsImg from "../Asset/download.jpg";
import plumbImg from "../Asset/plumb.jpg";

const Hero = () => {
  const [image, setImage] = useState([
    carImg,
    salonImg,
    tyresImg,
    vulcaImg,
    tailorsImg,
    plumbImg,
  ]);
  const [index, setIndex] = React.useState(0);
  const delay = 5000;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <Container>
      <Wrapper>
        <SlideShow>
          <SlideShowSlider
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {image.map((img, index) => (
              <Slide key={index} src={img} />
            ))}
          </SlideShowSlider>
        </SlideShow>
        <TextHolder>
          <Text>
            Whether you are looking to hire a skilled artisan or find your
            customer,We are at <span>Essentials</span>
            are ready to make life easy at just one go!
          </Text>
          <Button>Join us!</Button>
        </TextHolder>
      </Wrapper>
    </Container>
  );
};
export default Hero;
const TextHolder = styled.div``;

const Button = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #387546;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  margin: 10px 0;

  :hover {
    cursor: pointer;
    background: #34be82;
  }
`;
const Text = styled.div`
  width: 400px;
  font-size: 30px;
  font-weight: bold;
  font-family: poppins;
  letter-spacing: 1.2px;
  line-height: 1.3;
  span {
    color: #387546;
    margin-right: 5px;
  }
`;
const Slide = styled.img`
  height: 400px;
  width: 100%;
  display: inline-block;
`;
const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;
const SlideShow = styled.div`
  margin: 0;
  overflow: hidden;
  max-width: 700px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: contain;
`;
const ImageHolder = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  background: red;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
