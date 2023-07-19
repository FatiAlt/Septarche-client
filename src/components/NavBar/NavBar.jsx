
import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


{ <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Articles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> }

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">Librairie Sept Arche</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" onClick={toggleNavbar} />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto align-items-lg-center">
            <Nav.Link href="/" className="nav-link-hover" onClick={toggleNavbar}>
              Accueil
            </Nav.Link>
            <NavDropdown title="Mes Articles" id="nav-dropdown" className="nav-link-hover">
              <NavDropdown.Item href="/book">Livres</NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href="/login" className="nav-link-hover login-cart" onClick={toggleNavbar}>
               Se connecter <i className="fa-solid fa-user"></i>
            </Nav.Link>

        <Nav.Link href="/cart" className="nav-link-hover " onClick={toggleNavbar}>
         Mon panier <i className="fas fa-shopping-cart"></i>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavBar;

