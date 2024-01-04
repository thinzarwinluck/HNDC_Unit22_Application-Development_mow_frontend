import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';import Dropdown from 'react-bootstrap/Dropdown';
import logo from "../src/img/logo.png";
import { Button } from "react-bootstrap";

const navigation = () => {
  const logout=()=>{
    localStorage.setItem("token","");
    window.location.href='/'
  }
  const user_type = localStorage.getItem('user_role');
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
          <Nav.Link href="/" className="text-dark pt-3">Home</Nav.Link>
          <Nav.Link href="/about" className="text-dark pt-3">About Us</Nav.Link>
          <Nav.Link href="/member" className="text-dark pt-3">Member</Nav.Link>
          <Nav.Link href="/donate" className="text-dark pt-3">Donate</Nav.Link>
          {localStorage.getItem("token") !== ''&&(
            <>
          <Nav.Link href="/" className="text-dark pt-3">Find Meal</Nav.Link>
          {user_type === 'admin' && (
            
       
          <Nav.Link href="/admin" className="text-dark pt-3">Users</Nav.Link>
          )}
          </>
          )}
        </Nav>

       
        
      </Navbar.Collapse>
      {localStorage.getItem("token") !== '' ?(
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Button variant="warning" onClick={logout}>Log out</Button>
      </Navbar.Collapse>
      ) : (
        <>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav.Link href="/login" className="ml-2">
            <Button variant="warning">Sign In</Button>
          </Nav.Link>
          <Nav.Link href="/register">
            <Button variant="warning">Sign Up</Button>
          </Nav.Link>
       </Navbar.Collapse>

   </>
       
      )}
      </Navbar>
  );
};

export default navigation;
