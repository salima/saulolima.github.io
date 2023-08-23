import React from "react";
import { useAppContext } from "../appContext";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Components
import { Container, Nav, Navbar } from "react-bootstrap";
// Images
import Logo from "../images/logo.svg";
import LogoOff from "../images/logo-off.svg";

const navLinks = {
  routes: [
    { id: "1R", name: "Inicial", route: "/" }
  ],
  to: [
    { id: "1T", name: "Inicial", to: "Home" },
    { id: "2T", name: "Publicações", to: "publicacao" },
    { id: "3T", name: "Contato", to: "contato" },
  ],
};

// Spacer for fixed Navigation bar
const FixedNavSpacer = styled.div`
  height: var(--nav-height);  
`;

export default function NavBar() {
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  const { pathname } = useLocation();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="SL"
              src={theme === "light" ? Logo : LogoOff}
              width="35"
              height="35"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="nav-link-active"
                          className="nav-link"
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </ScrollLink>
                      </Nav.Item>
                    );
                  })
                : navLinks.routes.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <Link
                          to={el.route}
                          className={
                            pathname === el.route
                              ? "nav-link-active"
                              : "nav-link"
                          }
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </Link>
                      </Nav.Item>
                    );
                  })}
            </Nav>
            {/* <Nav>
              <ThemeToggle />
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
