import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header2 from "../../assets/images/headers/header2.jpg";

// Jumbotron for landingpage

const JumbotronSmall = ({ imgPath }) => {
  return (
    <>
      <div>
        <Image src={imgPath} height={1500} objectFit={"cover"} />
      </div>
    </>
  );
};

export default JumbotronSmall;
