import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./About.css"
import img from "../../images/about/medicenter-about-us.PNG"

const About = () => {
  return (
    <Container fluid className="mx-auto p-3">
      <Row>
        <Col sm={12} md={6} className="p-3">
          <img src={img} className="img-fluid" alt="" />
        </Col>
        <Col sm={12} md={6}>
          <h5 className="fw-light mt-3">Welcome to Medicenter</h5> <hr />
          <h3 className="fw-light mt-3">
            Medicenter holds the privilage of being Chicago's first choice
            hospital
          </h3>
          <p className=" mt-3">
            Since its founding we become an integral part of the city, advancing
            our mission of providing access to compassionate care to our
            communities. Today patients find care that combines world-class
            medicine with compassion.
          </p>
          <ul>
            <li>
              Medicenter is a people centered environment – which means you are
              at the center of everything we do and every decision we make.
            </li>
            <li>
              We are your partner for health, helping your live well by bringing
              the best in medicine and healthcare to your door.
            </li>
            <li>
              We provide fast, effective and affordable immediate care for
              non-life threatening illnesses. Most patients are seen, treated
              and released in about 60 minutes.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;