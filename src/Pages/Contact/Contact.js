import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import "./Contact.css"
const Contact = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={9}>
          <Form className=" rounded p-3 mt-5 mb-5  ">
            <h2 className="text-center">Get in touch</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridname">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="surname" placeholder="Enter Surname" />
              </Form.Group>{" "}
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="Subject" placeholder="Subject" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Label className="mt-2">Write your Message</Form.Label>
              <FloatingLabel
                controlId="floatingTextarea2"
                className="mt-2"
                label=" &nbsp;Message"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Row>

            <Button
              // variant="light"
              className="btn  border text-dark mt-3 send-button"
              type="submit"
            >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
