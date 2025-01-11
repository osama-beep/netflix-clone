import { useState } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkStyle = {
    color: "#a9a9a9",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#e5e5e5",
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
            {["TV Shows", "Movies", "Recently Added", "My List"].map((item) => (
              <Nav.Link
                key={item}
                href="#"
                className="fw-bold"
                style={linkStyle}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, linkHoverStyle)
                }
                onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
              >
                {item}
              </Nav.Link>
            ))}
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
