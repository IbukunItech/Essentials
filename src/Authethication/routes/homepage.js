import React from "react";
import styled from "styled-components";
import Testimonials from "../component/testimonial";
import Hero from "./hero";
import TaibatHome from "../../TaibatHomePage/taibatHomePagee";
import Footer from "../../Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Hero />;
      <TaibatHome />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
