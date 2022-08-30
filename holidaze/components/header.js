import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

const menuLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Booking",
    path: "/booking",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const MenuItem = ({ title, path }) => {
  const router = useRouter();

  return (
    <Link href={path} passHref className="ml-auto">
      <Nav.Link active={router.pathname === path}>{title}</Nav.Link>
    </Link>
  );
};

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="outline-none"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {menuLinks.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
