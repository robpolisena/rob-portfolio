import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/rob-logo-v2.png";
import "./Mynavbar.css";

export default function Mynavbar() {
  return (
    <>
      <Navbar
        fixed="top"
        variant="dark"
        collapseOnSelect
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand className="navbrand" href="#home">
          <img className="logo" src={Logo} alt="Rob Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#memes">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

/*
<Navbar className='navrob' fixed="top" collapseOnSelect expand="lg"  bg="dark" variant="dark">
  <Navbar.Brand href="#home">
    <img className='logo' src={Logo} alt="Rob Logo"/>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Skills</Nav.Link>
      <Nav.Link href="#pricing">Projects</Nav.Link>
      <Nav.Link href="#pricing">Experience</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
*/
