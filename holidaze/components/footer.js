import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import InstagramLogo from "../assets/logo/instagram.svg";

const Footer = () => {
  return (
    <Container
      fluid
      className="bg-primary text-white text-center"
      style={{ height: 200 }}
    >
      <Row className="py-5">
        <Col>Links</Col>
        <Col xs={{ order: "last" }} className="p">
          Social media
          <InstagramLogo width={70} height={70} />
        </Col>
        <Col md={{ order: "last" }} className="p">
          Log in Admin
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="p">
          Copyright
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
