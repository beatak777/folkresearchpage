import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNav() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-red">
      <Container className="d-flex flex-column align-items-center">
        <Navbar.Brand href="#">
          Beata Konya's Research Project: Folklore & Reincarnation in the Theatre</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./home">Home</Nav.Link>
            <Nav.Link href="./about">About</Nav.Link>
            <Nav.Link href="./interviews">Interviews</Nav.Link>
            <Nav.Link href="./film">Film</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
