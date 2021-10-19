import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useServices from "../../../Hooks/useServices"
const ServiceDetails = () => {
  let { serviceId } = useParams();
//   console.log(serviceId, "servi ccceee iiidddd");
    const [allservices, setAllServices] = useState([]);
     const [singleService, setSingleService] = useState({});

  useEffect(() => {
    //   fetching fake data
    fetch("/fakeServicesData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data.services);
        // console.log(data.services, "serviceeeeesss");
      });
  }, []);

  // call hbe jokon amar shob data load hye state e set hbe
  useEffect(() => {
    const foundService = allservices.find(
    //   (service) => console.log(service.id, "amiiiiiiiii")
        (service) => service.id === serviceId
    );
      setSingleService(foundService);
    //   console.log(foundService);
  }, [allservices]);
    return (
      <div>{singleService?.serviceName}</div>
    );
};

export default ServiceDetails;
