import Head from "next/head";
import axios from "axios";
// import Header2 from "../../public/images/header2.jpg";
import { BASE_URL } from "../../constant/api";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import EnquiryModal from "../../components/enquiries/EnquiryModal";

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + "accomodations/?populate=*");
    console.log(response.data);
    const hotels = response.data;
    const paths = hotels.data.map((hotel) => ({
      params: { id: `${hotel.id}` },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}
export async function getStaticProps({ params }) {
  const url = `${BASE_URL}accomodations${params.id}`;

  let hotel = null;

  try {
    const response = await axios.get(url);

    hotel = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotel: hotel },
  };
}

export default function Details({ hotel }) {
  console.log(hotel[0].attributes.url);
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Book your accomodattion with Holidaze Booking. You find Bergens best hotels with us"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Holidaze | Details Page</title>
        <link rel="icon" href="./favicon-holidaze.png" />
      </Head>

      <Container className="py-5">
        <Row>
          <Col lg={6}>
            {/* <Image
              as={Image}
              src={Header2}
              alt={item.attributes.alternativeText}
            /> */}
            <div>
              <div key={hotel.id}>
                <Card.Img
                  as={Image}
                  src={hotel[0].attributes.url}
                  objectFit={"cover"}
                  width={700}
                  height={250}
                  alt={hotel[0].attributes.alternativeText}
                />
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <Col>
              <div className="h3">{hotel[0].attributes.name}</div>
              <p className="">{hotel[0].attributes.description}</p>
              <p>Price per night</p>
              <p className="fw-bold">NOK {hotel[0].attributes.price},-</p>
              <EnquiryModal hotelName={hotel[0].attributes.name} />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
