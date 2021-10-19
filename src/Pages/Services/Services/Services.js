import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices();
  //   console.log(services);
  return (
    <div className="container-fluid row  mt-3 mx-auto card-component p-4">
      <div className="text-center mb-2 our-services">
        <h1>
          <u>Our Services</u>
        </h1>
      </div>

      {/* Showing in services page  */}
      <div className="col-sm-12 col-md-4">
        <h3>We Look Forward To Meeting and Bring Back Your Smile</h3>
      </div>
      <div className="col-sm-12 col-md-8">
        <p>
          Our dentists are a team of qualified specialists who have all the
          necessary qualities and skills so that the best dentist can be able to
          provide services at the highest level. Our educated specialists with
          extensive knowledge and experience counted in years and hundreds of
          treatments performed. We offer:
        </p>
      </div>

      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
