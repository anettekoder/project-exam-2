import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Mainlogo from "../assets/logo/main-logo-white.png";

export const menuLinks = [
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
        <Navbar.Brand href="/">
          <Image
            src={Mainlogo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="outline-none"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end px-2"
        >
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
