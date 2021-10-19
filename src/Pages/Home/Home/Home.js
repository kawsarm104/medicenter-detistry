import React from "react";
// import Service from "../../Services/Service/Service";
import Services from "../../Services/Services/Services";
import DearPatient from "../DearPatient/DearPatient";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <DearPatient/>
      <Services></Services>
    </div>
  );
};

export default Home;
