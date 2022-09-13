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
    <li>
      <Link
        href={path}
        passHref
        className="ml-auto"
        active={router.pathname === path}
      >
        {title}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <Container
      fluid
      className="bg-primary text-white text-center "
      style={{ minHeight: 300 }}
    >
      <Row className="py-5 gy-4 mt-5">
        <Col className="xs={span:12} md={4} footer-navigation">
          <div className="p">Costumer service:</div>
          <ul>
            {menuLinks.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}
          </ul>
        </Col>
        <Col xs={{ span: 12, order: "last" }} md={{ span: 4 }} className="p">
          <div className="p pb-1">Social media</div>
          <InstagramLogo width={30} height={30} />
        </Col>
        <Col xs={12} md={{ span: 4, order: "last" }} className="p ">
          Log in Admin
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="p pb-4">
          &copy; Holidaze Booking. All rights reserved.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
