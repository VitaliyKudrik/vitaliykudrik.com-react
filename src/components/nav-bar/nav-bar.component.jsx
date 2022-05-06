import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const MyNavBar = () => {
  return (
    <div className="nav_bar">
      <Navbar bg="#f4f4f4;" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <div style={{ fontSize: "2rem" }}>
              <img alt="" src="/logo512.png" width="50" height="50" className="d-inline-block align-top" />
              Vitaliy Kudrik{" "}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="nav-link">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
            <NavLink href="#section--1" style={{ color: "black" }}>
              About Me
            </NavLink>
            <NavLink href="#section--2" style={{ color: "black" }}>
              Contact Me
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
