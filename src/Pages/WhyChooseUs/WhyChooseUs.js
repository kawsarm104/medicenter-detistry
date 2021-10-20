import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icn1 from "../../images/icon/icn1.PNG";
import icn2 from "../../images/icon/icn2.PNG";
import icn3 from "../../images/icon/icn3.PNG";
import icn4 from "../../images/icon/icn4.PNG";
import icn5 from "../../images/icon/icn5.PNG";
import icn6 from "../../images/icon/icn6.PNG";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <Container fluid className="mt-5 mb-5 px-5  about-us">
      <div className="text-center our-doctors mb-4 py-3">
        <h1 className="py-3">
          <u>Why Choose Us</u>
        </h1>
        <p className="px-5">
          It is the people who make Medicenter what it is and we are extremely
          proud of the achievements of our staff. We all work together to help
          our patients through recovery, providing the best possible care.
        </p>
      </div>
      <Row>
        <Col sm={12} md={4} className=" p-3 text-center ">
          <img src={icn1} className="img-fluid " alt="" />
          <div className="text-center">
            <span className="fs-4">Comprehensive Care</span>

            <p>
              Medicenter offers comprehensive dental care for both adults and
              children from our office at Toronto.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4} className=" p-3 text-center">
          <img src={icn2} className="img-fluid" alt="" />
          <div className="text-center">
            <span className="fs-4">Individual Approach</span>

            <p>
              The dentist and patient together decide on a treatment plan that
              is manageable, affordable and reasonable.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4} className=" p-3 text-center">
          <img src={icn3} className="img-fluid" alt="" />
          <div className="text-center">
            <span className="fs-4">Nice Atmosphere</span>

            <p>
              Doing our best to calm our patients and make them comfortable and
              relaxed can help prevent fear and anxiety.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4} className=" p-3 text-center">
          <img src={icn4} className="img-fluid" alt="" />
          <div className="text-center">
            <span className="fs-4">Qualified Team</span>

            <p>
              Our doctors are people with passion and experience. They approach
              each patient with a sense of sensitivity.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4} className=" p-3 text-center">
          <img src={icn5} className="img-fluid" alt="" />
          <div className="text-center">
            <span className="fs-4">Precise Treatment</span>

            <p>
              Each treatment is different and tailored to the specific needs of
              our patients. It must be precise and effective.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4} className=" p-3 text-center">
          <img src={icn6} className="img-fluid" alt="" />
          <div className="text-center">
            <span className="fs-4">Comfortable Clinic</span>

            <p>
              Relax in our comfortable waiting room with calm music. Our
              patients are always treated as our guests.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
