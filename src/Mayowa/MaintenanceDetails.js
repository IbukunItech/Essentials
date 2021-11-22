import React from "react";
import styled from "styled-components";
import data from "./maintenance.json";
import { AiOutlinePhone, AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import Footer from "../Footer/Footer";

function MaintenanceDetails() {
  return (
    <Container>
      <Wrapper>
        {data.map((prop) => {
          const { id, section, image, name, Contact, location, description, rating } = prop;
          return (
            <Card key={id}>
              <Image src={image} />
              <InfoHolder>
                <About>
                  <AboutName>{name}</AboutName>
                  <AboutContact>
                    <AiOutlinePhone />
                    {Contact}
                  </AboutContact>
                </About>
                <Desc>{description}</Desc>
                <Location>{location}</Location>

                <Section>{section}</Section>
                <CardHolder>
                  {rating === "5.0" ? (
                    <IconHolder>
                      <span>{rating}</span>
                      <AiFillStar />
                      <AiFillStar /> <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </IconHolder>
                  ) : rating === "4.5" ? (
                    <IconHolder>
                      <span>{rating}</span>
                      <AiFillStar />
                      <AiFillStar /> <AiFillStar />
                      <AiFillStar />
                      <BsStarHalf />
                    </IconHolder>
                  ) : rating === "4.0" ? (
                    <IconHolder>
                      <span>{rating}</span>
                      <AiFillStar />
                      <AiFillStar /> <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </IconHolder>
                  ) : rating === "3.0" ? (
                    <IconHolder>
                      <span>{rating}</span>
                      <AiFillStar />
                      <AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar />
                    </IconHolder>
                  ) : null}

                  <Catalogue>View my catalogue</Catalogue>
                </CardHolder>
              </InfoHolder>
            </Card>
          );
        })}
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default MaintenanceDetails;
const CardHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Catalogue = styled.div`
  cursor: pointer;
  text-decoration: underline;
  font-weight: 600;
`;
const Location = styled.div`
  position: absolute;
  width: fit-content;
  padding: 3px 10px;
  background: #387546;
  font-size: 12px;
  border-radius: 15px;
  color: #db9b34;
  font-weight: bold;
  top: 7px;
  left: 85px;
`;
const AboutName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const AboutContact = styled.div``;
const IconHolder = styled.div`
  display: flex;
  align-items: center;
  color: #db9b34;
  span {
    margin-right: 5px;
    color: black;
  }
`;
const Desc = styled.div`
  padding: 10px 0;
  line-height: 1.2;
  letter-spacing: 1.2px;
  font-weight: 400;
`;
const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Section = styled.div`
  position: absolute;
  width: fit-content;
  padding: 3px 10px;
  background: #387546;
  font-size: 12px;
  border-radius: 15px;
  color: #db9b34;
  font-weight: bold;
  top: 7px;
  left: 5px;
`;
const InfoHolder = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  overflow: hidden;
  object-fit: cover;
`;
const Card = styled.div`
  position: relative;
  width: 500px;
  min-height: 70vh;
  height: 100%;
  background: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: whitesmoke;
`;
