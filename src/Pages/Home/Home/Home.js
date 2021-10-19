import React from "react";
// import Service from "../../Services/Service/Service";
import Services from "../../Services/Services/Services";
import DearPatient from "../DearPatient/DearPatient";
import Slider from "../Slider/Slider";
import WhereToFindUs from "../WhereToFindUs/WhereToFindUs";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <DearPatient />
      <Services></Services>
      <WhereToFindUs></WhereToFindUs>
    </div>
  );
};

export default Home;
