import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  //   console.log(props);
  const { id, image, serviceName, shortDetails } = props.service;
  return (
    //   {/* tried with react <Container> <Row><Col></Col></Row></Container> but could not fixed  */}
    <>
      
      <div className="container-fluid  col-sm-12 col-md-6 col-lg-4 mt-3 g-0 ">
        <Card className="border-0 h-100 card-component">
          <Card.Img variant="top" src={image} fluid />
          <Card.Body className="p4-3">
            <Card.Title>{serviceName}</Card.Title>
            <p>{shortDetails}</p>
          </Card.Body>

          <Card.Footer className="card-footer">
            <Link to={`/service/${id}`}>
              <Button
                variant=""
                className="btn   button-style w-100 mt-2 viewdetails-button"
              >
                View Details
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Service;
