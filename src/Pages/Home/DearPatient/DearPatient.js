import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import p1image from "https://quanticalabs.com/wp_themes/medicenter-dentist/files/2021/05/image_01.jpg"
import p1image from "../../../images/patient/image_01.jpg";
import p2image from "../../../images/patient/image_02.jpg";
import p3image from "../../../images/patient/image_03.jpg";
import icon1 from "../../../images/icon/medicenter-dear-patient-icon1.PNG";
import icon2 from "../../../images/icon/medicenter-dear-patient-icon2.PNG";
import "./DearPatient.css";

const DearPatient = () => {
  return (
    <Container fluid className="mt-5 p-5 dear-patient">
      <Row>
        <Col sm={10} md={6} className="mb-2">
          <Row>
            <Col sm={12} md={12}>
              <img src={p1image} className="img-fluid" alt="" />
            </Col>

            <Col sm={12} className="p-3">
              <Row className="">
                <Col sm={3} md={6}>
                  <img src={p2image} className="img-fluid mt-4" alt="" />
                </Col>
                <Col sm={3} md={6}>
                  <img src={p3image} className="img-fluid" alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm={10} md={6}>
          <h5 className="fw-light mt-2">Dear patient</h5> <hr />
          <h3 className="my-3">
            Medicenter is a Modern Dental Office that Meets Your Highest
            Expectations
          </h3>
          <p>
            For the sake of your healthy and beautiful smile, we offer
            comprehensive dental care at affordable prices. All treatments are
            performed using the highest class specialized equipment. For your
            convenience, we’ve also created the option of taking x-rays in our
            office including a pantomogram and dental tomography.
          </p>
          <Row className="mt-5">
            <Col sm={12} md={6}>
              <img src={icon1} fluid alt="" />
              <h5 className="fw-light mt-2">Our Mission</h5> <hr />
              <p>
                Our mission is constantly improve our qualifications to be able
                to heal according to global standards.
              </p>
            </Col>
            <Col sm={12} md={6}>
              <img src={icon2} fluid alt="" />
              <h5 className="fw-light mt-2">Great Experience</h5> <hr />
              <p>
                Thanks to our experience, we have gained what is most valuable,
                i.e. patient trust and their positive recommendations.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DearPatient;
