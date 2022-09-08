import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// Membuat pembacaan link di atas
import { useLocation, Link } from "react-router-dom";

const NavbarComp = () => {
  const [isredirect, setRedirect] = useState();
  const location = useLocation();
  useEffect(() => {
    setRedirect(location.pathname);
  }, [location]);

  const isActive = isredirect === "/home" ? " active" : "";

  const isActiveMeetup = isredirect === "/meetup" ? " active" : "";

  const isActiveExplore = isredirect === "/explore" ? " active" : "";

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="/" className={isActive}>
            Qtemu
          </Navbar.Brand> */}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className={isActive}>
                QTemu
              </Nav.Link>
              <Nav.Link as={Link} to="/meetup" className={isActiveMeetup}>
                Create Meetup
              </Nav.Link>
              <Nav.Link as={Link} to="/explore" className={isActiveExplore}>
                Explore
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
