import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNav() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">Beata Konya's Research Project</Navbar.Brand>
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
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
