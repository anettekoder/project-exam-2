import Head from "next/head";
import Heading from "../components/heading";
import JumbotronSmall from "../components/jumbotron/jumbotronSmall";
import Header3 from "../public/images/header3.jpg";
import PhotoContactPage from "../public/images/photo-contact-page.jpg";
import BergenMap from "../public/images/bergen-map.jpg";
import ContactForm from "../components/contact/contactForm";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Contact page for Holidaze. A booking website, specialized on hotels in Bergen"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Holidaze | Contact</title>
        <link rel="icon" href="./favicon-holidaze.png" />
      </Head>

      <main>
        <JumbotronSmall imgPath={Header3} />

        <Container>
          <Row className="pt-5">
            <Col
              xs={{ order: "last", span: 12 }}
              md={{ order: "first", span: 6 }}
            >
              <Image
                src={PhotoContactPage}
                height={500}
                width={500}
                objectFit={"cover"}
                alt="Hotelroom"
              />
            </Col>
            <Col
              xs={{ order: "first", span: 12 }}
              md={{ order: "last", span: 6 }}
            >
              <Heading headingText="Get in touch" />
              <ContactForm />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              xs={{ order: "last", span: 12 }}
              md={{ order: "last", span: 6 }}
            >
              <Image
                src={BergenMap}
                height={500}
                width={500}
                objectFit={"cover"}
                alt="Map of Bergen"
              />
            </Col>
            <Col
              xs={{ order: "first", span: 12 }}
              md={{ order: "first", span: 6 }}
              className="pb-5"
            >
              <Heading headingText="Contact information" />

              <div className="h3">Adress:</div>
              <p>Olebullsplass 45, 5005 BERGEN. Floor 2.</p>
              <br />
              <div className="h3">Call:</div>
              <p>+47 274 02 948</p>
              <br />
              <div className="h3">Email:</div>
              <p>holidaze@booking.com</p>
              <br />
              <div className="h3">Admin:</div>
              <Link href={"/logIn"}>
                <a> Login Admin</a>
              </Link>
              <br />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
