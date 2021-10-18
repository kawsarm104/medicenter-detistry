import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  //   console.log(props);
  const { id, name, image, serviceName, shortDetails } = props.service;
  return (
    <>
      {/* tried with react <Container> <Row><Col></Col></Row></Container> but could not fixed  */}
      <div className="col-sm-12 col-md-6 col-lg-4 mt-2 container">
        <Card className=" shadow h-100 ">
          <Card.Img variant="top" src={image} fluid/>
          <Card.Body className="">
            <Card.Title>{name}</Card.Title>
            <h4>{serviceName}</h4>
            <p>{shortDetails}</p>
          </Card.Body>

          <Card.Footer className="card-footer">
            <Link to={`/service/${id}`}>
              <Button
                variant=""
                className="btn btn-outline-info text-dark button-style w-100 mt-2"
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
