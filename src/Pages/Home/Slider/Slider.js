import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg1 from "../../../images/banner/medicenter-slider-image-2.jpg";
import sliderImg2 from "../../../images/banner/medicenter-slider-image-3.jpg";
import sliderImg3 from "../../../images/banner/medicenter-slider-image-4.jpg";

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderImg1}
          fluid
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderImg2}
          fluid
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderImg3}
          fluid
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
