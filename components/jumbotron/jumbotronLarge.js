import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header1 from "../../public/images/header1.jpg";
import Heading from "../heading";

// JumbotronLarge is for landingpage - tablet devices

export default function JumbotronLarge() {
  return (
    <>
      <div className="jumbotron shadow-lg mb-5 bg-black ">
        <div className="overlay">
          <div className="jumbotron-inner">
            <Heading
              landingPageHeading="Holidaze is a service for booking hotels, apartments and B&B in
              Bergen."
            />
            <h2 className="h2 .d-none d-md-block d-lg-block">
              Find your accommodation with us now, and stay safely and
              offordable.
            </h2>
          </div>
        </div>
      </div>
      <Container fluid>
        <Col className="d-block d-md-none d-lg-none">
          <Row className="bg-secondary h-25 d-flex"></Row>
          <Row className="pb-5">
            <Image src={Header1} />
          </Row>
          <Row>
            <h1 className="text-center pb-5">
              Holidaze is a service for booking hotels, apartments and B&B in
              Bergen.
            </h1>
          </Row>
        </Col>
      </Container>
    </>
  );
}
