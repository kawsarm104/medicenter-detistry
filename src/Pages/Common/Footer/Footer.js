import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-class mt-4 mx-auto">
      <Container
        fluid
        className="p-4 col-container"
        // sticky="bottom"
      >
        <Row className="mt-4 ">
          <Col sm={12} md={3}>
            <h3>About Us</h3> <hr className="w-25" />
            <p>
              At MediCenter we intend to create medicines that improve both the
              quality and duration of patient lives.
            </p>
            <p>2702 Memory Lane Chicago, IL 60605</p>
            <p>Email: kawsarm104@gmail.com</p>
            <p>Phone: 01515247103</p>
          </Col>
          <Col sm={12} md={3}>
            <h3>Additional Links</h3> <hr className="w-25" />
            <div>
              <NavLink className="additional-navlink" to="#">
                About
              </NavLink>
              <NavLink className="additional-navlink" to="#">
                Doctors
              </NavLink>
              <NavLink className="additional-navlink" to="#">
                Blog
              </NavLink>
              <NavLink className="additional-navlink" to="#">
                Medical Care{" "}
              </NavLink>
              <NavLink className="additional-navlink" to="#">
                Shop
              </NavLink>
              <NavLink className="additional-navlink" to="#">
                Shortcodes
              </NavLink>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <h3>Latest Posts</h3> <hr className="w-25" />
            <p title="Many doctors use wrong test to diagnose kids food allergies">
              Many doctors use wrong test to diagn...
            </p>
            <p title="Rising cost of diabetes care concerns patient and doctors">
              Rising cost of diabetes care concerns ...
            </p>
            <p title="Can breakfast help keep us thin? Nutrition science is tricky ">
              Can breakfast help keep us thin? N ...
            </p>
          </Col>
          <Col sm={12} md={3}>
            <h3>Latest Tweets</h3> <hr className="w-25" />
            <p>We proudly present SwimAcademy</p>
            <p>dedicated to swimming schools and trainers…</p>
            <p>
              We've released new version (v6.8) of our #Timetable #Responsive
              #Booking #Schedule . Please check at…
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer-bottom ">
        <Row>
          <Col sm={12} md={6}>
            <div className="ms-2">
              <p>© 2021. All rights reserved kawsarm104@gmail.com</p>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="text-center">
              <NavLink className="additional-navlink d-inline" to="#">
                privary
              </NavLink>
              <NavLink className="additional-navlink d-inline" to="#">
                terms
              </NavLink>
              <NavLink className="additional-navlink d-inline" to="#">
                sitemap
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <div className=" d-flex justify-content-around"></div>
    </div>
  );
};

export default Footer;
