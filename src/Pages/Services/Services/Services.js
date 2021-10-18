import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  //   console.log(services);
  return (
    <div className="container-fluid row  mt-3 mx-auto">
      {/* Showing in services page  */}

      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
