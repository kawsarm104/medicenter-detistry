import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../images/wheretofind/medicenter-wheretofindus.PNG";
import "./WhereToFind.css";

const whereToFindUs = () => {
  return (
    <Container fluid className="mt-5 mb-5 px-4 where-to-find-us">
      <Row>
        <Col sm={12} md={6} className=" p-3">
          <img src={img} className="img-fluid" alt="" />
        </Col>
        <Col sm={12} md={6} className="p-3">
          <h5 className="fw-light mt-2">Our Mission</h5> <hr />
          <h2 className="fw-lighter">Our dentist office</h2>
          <h6 className="fw-lighter">
            The office is located 100 meters from the metro station and 500
            meters from the A2 route, which provides easy access both by metro
            and other means of transport. See our doctor’s schedule and make an
            appointment.
          </h6>
          <Button className="mt-4 ps-5 pe-5 pt-2 pb-2 border-0 learn-more-btn">
            Learn More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default whereToFindUs;
