import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";
import Link from "next/link";
import InstagramLogo from "../assets/logo/instagram.svg";
import { menuLinks } from "./header";

const MenuItem = ({ title, path }) => {
  const router = useRouter();

  return (
    <Link href={path} passHref className="ml-auto">
      <ul active={router.pathname === path}>
        <li>{title}</li>
      </ul>
    </Link>
  );
};

const Footer = () => {
  return (
    <Container
      fluid
      className="bg-primary text-white text-center"
      style={{ height: 300 }}
    >
      <Row className="py-5">
        <Col>
          <div className="p">Costumer service:</div>
          {menuLinks.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </Col>
        <Col xs={{ order: "last" }} className="p">
          <div className="p pb-1">Social media</div>
          <InstagramLogo width={30} height={30} />
        </Col>
        <Col md={{ order: "last" }} className="p">
          Log in Admin
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="p">
          &copy; Holidaze Booking. All rights reserved.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
