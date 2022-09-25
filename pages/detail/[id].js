import Head from "next/head";
import axios from "axios";
import Heading from "../../components/heading";
import { BASE_URL } from "../../constant/api";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header2 from "../../assets/images/headers/header2.jpg";
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
  const url = `${BASE_URL}accomodations/${params.id}`;

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
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Book your accomodattion with Holidaze Booking. You find Bergens best hotels with us"
        />
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
            <Image as={Image} src={Header2} alt={hotel.attributes.alt} />
            {/* {hotel.attributes.images.data.map((item, id) => {
              return (
                <div>
                  <div key={id}>
                    <Card.Img
                      as={Image}
                      src={item.attributes.url}
                      loader={() => item.attributes.url}
                      objectFit={"cover"}
                      width={700}
                      height={250}
                      alt={item.attributes.alt}
                    />
                  </div>
                </div>
              );
            })} */}
          </Col>

          <Col lg={6}>
            <Col>
              <div className="h3">{hotel.attributes.name}</div>
              <p className="">{hotel.attributes.description},-</p>
              <p>Price per night</p>
              <p className="fw-bold">NOK {hotel.attributes.price},-</p>
              <EnquiryModal hotelName={hotel.attributes.name} />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
