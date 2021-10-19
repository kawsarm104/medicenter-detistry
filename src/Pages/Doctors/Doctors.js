import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import doc1 from "../../images/doctors/image_05.jpg";
import doc2 from "../../images/doctors/image_06.jpg";
import "./Doctors.css";

const Doctors = () => {
  return (
    <Container fluid className="mt-5 mb-5 px-5  doctors">
      <div className="text-center our-doctors mb-4 py-3">
        <h1 className="py-3">
          <u>Doctors</u>
        </h1>
        <p className="px-5">
          Medicenter is a unique place, which consists of nice and always
          helpful staff, a qualified team of doctors, each of whom is a
          specialist in the field, professional equipment and friendly
          interiors.
        </p>
      </div>
      <Row>
        <Col sm={12} md={6} className=" p-3">
          <img src={doc1} className="img-fluid" alt="" />
          <h3 className="fw-light">Dr. Ann Henner</h3>
          <h4 className="fw-light">Dentist, founder of the clinic</h4>
          <p>
            Dr. Adams is certified by the American Board in Internal Medicine
            and in hematology and medical oncology. He currently serves as a
            consultant in medical oncology at Medicenter Hospital and as the
            program director for the National Healthcare Group Medical Oncology
            Residency Program, which is run in collaboration with Medicenter
            Hospital.
          </p>
        </Col>
        <Col sm={12} md={6} className=" p-3">
          <img src={doc2} className="img-fluid" alt="" />
          <h3 className="fw-light">Dr. Ann Henner</h3>
          <h4 className="fw-light">Dental Surgeon, founder of the clinic</h4>
          <p>
            Dentist Mark Anthony is graduate of the Medical University of
            Toronto, graduating in 2006. Professionally, he is particularly
            interested in dental and pediatric surgery. Animal lover. At home he
            rests reaching for good literature and listening to music.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Doctors;
