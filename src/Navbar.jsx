import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from "../src/img/logo.png";
import { Button, NavbarToggle } from "react-bootstrap";

import './Navbar.css';

const navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="white" fixed="top">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="100"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* Update the href values for your links */}
          <Nav.Link href="/" className="text-dark pt-3">Home</Nav.Link>
          <Nav.Link href="/about" className="text-dark pt-3">About Us</Nav.Link>
          <Nav.Link href="/" className="text-dark pt-3">Find Meal</Nav.Link>
          <Nav.Link href="/" className="text-dark pt-3">Contact Us</Nav.Link>
        </Nav>
        <DropdownButton id="dropdown-basic-button" title="Program" variant="white" className="pt-2">
          {/* Update the href values for your dropdown items */}
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        
      </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav.Link href="#" className="ml-2">
            <Button variant="warning">Sign In</Button>
          </Nav.Link>
          <Nav.Link href="#">
            <Button variant="warning">Sign Up</Button>
          </Nav.Link>
       </Navbar.Collapse>

    </Navbar>
  );
};

export default navigation;
