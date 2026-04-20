import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="navbar" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Gazi Jarin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#intro">Home</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#experience">Experience</Nav.Link>
            <Nav.Link href="/#projects">Projects</Nav.Link>
            <Nav.Link href="/#art">Art</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="mailto:gazijarin@gmail.com">
              <EmailRoundedIcon style={{ fontSize: 20 }} />
            </Nav.Link>
            <Nav.Link href="https://github.com/gazijarin" target="_blank">
              <GitHubIcon style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/gazi-jarin-3644b0172/"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 21 }} />
            </Nav.Link>
            <Nav.Link href="https://medium.com/@gazijarin.ai" target="_blank">
              <BorderColorIcon style={{ fontSize: 20 }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
