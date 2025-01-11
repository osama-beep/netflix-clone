import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BootstrapNavbar expand="lg" className="navbar-dark">
      <Container fluid className="px-3">
        <BootstrapNavbar.Brand href="#">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="navbarContent"
          onClick={toggleMenu}
        />
        <BootstrapNavbar.Collapse
          id="navbarContent"
          className={isMenuOpen ? "show" : ""}
        >
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="fw-bold text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold text-white">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold text-white">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold text-white">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold text-white">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex flex-row align-items-center mt-3 mt-lg-0">
            <div className="d-flex align-items-center">
              <i
                className="bi bi-search text-white me-3"
                style={{ fontSize: "1.5rem" }}
              ></i>
              <div
                id="kids"
                className="fw-bold me-3"
                style={{ color: "#f5f5f1" }}
              >
                KIDS
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i
                className="bi bi-bell text-white me-3"
                style={{ fontSize: "1.5rem" }}
              ></i>
              <i
                className="bi bi-person-circle text-white"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </div>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
