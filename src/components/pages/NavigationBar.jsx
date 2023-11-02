import { Container, Nav, Navbar } from "react-bootstrap";
import FooterComp from "../utils/FooterComp";
import Home from "./Home";
import { Outlet } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <Navbar expand="md" className="py-1" style={{ background: "teal" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.NmaxPLSFW8AdOxs32urU7AHaIZ&pid=Api&P=0&h=220"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ borderRadius: "50%" }}
            />
          </Navbar.Brand>
          <Navbar.Brand href="/" className="d-none d-sm-block">
            <span className="brandText">Cartoon Character</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto justify-content-end gap-5"
              style={{ width: "100%" }}
            >
              <Nav.Link href="/" style={{ color: "white", fontWeight: "bold" }}>
                Home
              </Nav.Link>
              <Nav.Link
                href="character"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Character
              </Nav.Link>
              <Nav.Link
                href="login"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Login
              </Nav.Link>
              <Nav.Link
                href="register"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <FooterComp />
    </>
  );
}