import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="danger" expand="lg">
        <Navbar.Brand href="#home">AD D&D Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Maps" id="basic-nav-dropdown">
              <NavDropdown.Item href="/maps#Oakhurst-map-paper">Oakhurst</NavDropdown.Item>
              <NavDropdown.Item href="/maps#Ubbin Falls-map-paper">Ubbin Falls</NavDropdown.Item>
              <NavDropdown.Item href="/maps#Neverwinter-map-paper">Neverwinter</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Players" id="basic-nav-dropdown">
              <NavDropdown.Item href="/players#Gavinrad-card-paper">Gavinrad</NavDropdown.Item>
              <NavDropdown.Item href="/players#Leonias-card-paper">Leonias</NavDropdown.Item>
              <NavDropdown.Item href="/players#Sinisa-card-paper">Sinisa</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/logs">Logs</Nav.Link>
          </Nav>
          <Nav.Link href="/signin">Sign-In</Nav.Link>
          <Nav.Link href="/signout">Sign-Out</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
