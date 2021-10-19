import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/logo/medicenter-logo.png";
import "./Header.css";

const Header = () => {
  const { user, Signout } = useAuth();
  return (
    <Navbar expand="lg" className="p-3 mt-3 mb-2 navbar-class" sticky="top">
      <Container fluid className="">
        <Navbar.Brand as={NavLink} className="ms-3" to="/">
          <img
            alt=""
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>

            {user.displayName ? (
              <Nav.Link as={NavLink} to="#">
                Welcome: {user.displayName}
                <button
                  onClick={Signout}
                  style={{ border: "none", backgroundColor: "white" }}
                >
                  Signout
                </button>{" "}
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/signin">
                Signin
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
