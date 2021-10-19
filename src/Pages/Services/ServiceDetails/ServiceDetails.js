import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import useServices from "../../../Hooks/useServices"
import './ServiceDetails.css'
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
    <>
      <Container fluid className="mt-5 mb-5 px-5  service-details">
        <Row>
          <Col sm={12} md={6} className=" p-3">
            <img src={singleService?.image} className="img-fluid" alt="" />
          </Col>
          <Col sm={12} md={6} className="p-3">
            <h3 className="fw-light mt-2">{singleService?.serviceName}</h3>{" "}
            <hr />
            <h4 className="fw-lighter mt2 mb-4">{singleService?.shortDetails}</h4>
            <p>{singleService?.details}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceDetails;
