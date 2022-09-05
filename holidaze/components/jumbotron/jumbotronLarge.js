import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header1 from "../../assets/images/headers/header1.jpg";
import SearchInput from "../search";

// Jumbotron for landingpage - tablet devices
// In Container

const JumbotronLarge = () => {
  return (
    <>
      <div className="jumbotron shadow-lg mb-5 bg-black ">
        <div className="overlay">
          <div className="jumbotron-inner">
            <h1 className="h1 pb-4 .d-none .d-md-block .d-lg-block">
              Holidaze is a service for booking hotels, apartments and B&B in
              Bergen.
            </h1>
            <h2 className="h2 .d-none d-md-block d-lg-block">
              Find your accommodation with us now, and stay safely and
              offordable.
            </h2>
            <SearchInput />
          </div>
        </div>
      </div>
      <Container fluid>
        <Col className="d-block d-md-none d-lg-none">
          <Row className="bg-secondary h-25 d-flex">
            <SearchInput />
          </Row>
          <Row>
            <Image src={Header1} />
          </Row>
          <Row>
            <h1 className="h1 py-4 .d-none .d-md-block .d-lg-block">
              Holidaze is a service for booking hotels, apartments and B&B in
              Bergen.
            </h1>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default JumbotronLarge;
