import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateMeetup from "./CreateMeetup";
import Explore from "./Explore";

export default function NavbarComp() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="home.js">Qtemu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/meetup"}>
                  Create Meetup
                </Nav.Link>
                <Nav.Link as={Link} to={"/explore"}>
                  Explore
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/meetup" element={<CreateMeetup />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
