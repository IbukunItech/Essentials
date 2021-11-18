import React, { useState } from "react";
import styled from "styled-components";
import {BsInstagram, BsTwitter, BsFacebook, BsWhatsapp} from "react-icons/bs"
import data from "./event.json";
// import img from "./weld.jpg";

function EventDetails() {
  // const [myData, setMyData] = useState([]);
  return (
    <Container>
      <Wrapper>
        {data.map((props) =>(
          <Card>
          <Cardimage src={props.image} />
          <CardText>
            <Section1>
              <Vocation>{props.vocation}</Vocation>
              <Address>{props.companyname}</Address>
              <Address>{props.location}</Address>
              <Address>{props.contact}</Address>
            </Section1>

            <Writeup>{props.writeup}</Writeup>
            <Sect>
              <Section>@{props.section}</Section>
              <Comp>
                  <Icon><BsInstagram /></Icon>
                  <Icon><BsTwitter/></Icon>
                  <Icon><BsFacebook /></Icon>
                  <Icon><BsWhatsapp /></Icon>
              </Comp>
            </Sect>
          </CardText>
        </Card>
        ))

        }
      </Wrapper>
    </Container>
  );
}

export default EventDetails;
const Section1 = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Address = styled.div`
  font-size: 20px;
  margin-top:5px;
  display: flex;
  justify-content: center;
`;
const Icon = styled.div`
margin:10px;
font-size:25px;
`;

const CardText = styled.div`
  height: 450px;
  width: 1150px;
  background-color:   #387546;
  border-radius: 5px;
  color:white;
  font-family:sans-serif; 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;
const Cardimage = styled.img`
  height: 450px;
  width: 550px;
  // background-color:blue;
  border-radius: 5px;
`;
const Card = styled.div`
  height: 450px;
  width: 100%;
  color: white;
  margin: 20px;
  display: flex;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction:column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

`;
const Writeup = styled.div`
  height: 230px;
  margin: 10px 20px 20px 20px;
  display: flex;
  line-height:1.8;

`;
const Sect = styled.div`
  width: 1050px;
  display: flex;
  align-items: center;
  padding:0px 0px 0px 20px;
  justify-content: space-between;


`;
const Section = styled.div``;
const Comp = styled.div`
  display:flex;
  justify-content: space-around;
`;
const Vocation = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin-top:5px;
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: center;
`;
// const Container = styled.div``;
