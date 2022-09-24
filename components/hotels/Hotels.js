import Link from "next/link";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Header2 from "../../assets/images/headers/header2.jpg";
import { BASE_URL } from "../../constant/api";
import EnquiryModal from "../enquiries/EnquiryModal";

const HotelLink = {
  textDecoration: "none",
};
const response = fetch(
  "https://strapi-holidaze-exam.herokuapp.com/api/accomodations/?populate=*"
);
console.log(response);
const Hotels = ({ hotels }) => {
  console.log(hotels);
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {hotels &&
          hotels.data?.map((hotel, h, i) => {
            return (
              <div key={hotel.id}>
                <Col>
                  <Card className="mx-5 mb-5 hotel-list">
                    {/* <Card.Img
                      as={Image}
                      src={Header2}
                      alt={hotel.attributes.alt}
                    /> */}
                    {hotel.attributes.images.data.map((item, id) => {
                      return (
                        <div>
                          <div key={id}>
                            <Card.Img
                              layout="fill"
                              as={Image}
                              src={
                                BASE_URL + item.attributes.formats.medium.url
                              }
                              alt="image"
                            />
                          </div>
                        </div>
                      );
                    })}

                    <Card.Body>
                      {" "}
                      <Card.Text className="h3">
                        <Link style={HotelLink} href={`detail/${hotel.id}`}>
                          <a>{hotel.attributes.name}</a>
                        </Link>
                      </Card.Text>
                      <Card.Text className="p">
                        <Link href={`detail/${hotel.id}`}>
                          <a>Read more</a>
                        </Link>
                      </Card.Text>
                      <Col className="text-end">
                        <p>Price per night</p>
                        <p className="fw-bold">
                          NOK {hotel.attributes.price},-
                        </p>
                        <div className="d-flex justify-content-end">
                          <EnquiryModal hotelName={hotel.attributes.name} />
                        </div>
                      </Col>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
      </Row>
    </>
  );
};

export default Hotels;
