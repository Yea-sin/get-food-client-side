import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Delivery from "../Delivery/Delivery";
import Foods from "../Foods/Foods";

const Home = () => {
  return (
    <div>
      <Banner />
      <Foods />
      <About />
      <Delivery />
    </div>
  );
};

export default Home;
