import Head from "next/head";
import axios from "axios";
import Heading from "../../components/heading";
import { BASE_URL } from "../../constant/api";
import Card from "react-bootstrap/Card";
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
        <title>Holidaze | Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading
        headingText="Detail page"
        subHeadingText="Experience Bergen's best hotels"
      />

      <Row>
        <Col>
          <Card className="mx-5 mb-5 border-0">
            <Card.Img as={Image} src={Header2} alt={hotel.attributes.alt} />
            <Card.Body>
              {" "}
              <Card.Text className="h3">{hotel.attributes.name}</Card.Text>
              <Col>
                <p className="">{hotel.attributes.description},-</p>
                <p>Price per night</p>
                <p className="fw-bold">NOK {hotel.attributes.price},-</p>
                <EnquiryModal hotelName={hotel.attributes.name} />
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
