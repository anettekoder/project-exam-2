import Link from "next/link";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import EnquiryModal from "../enquiries/EnquiryModal";

const HotelLink = {
  textDecoration: "none",
};

const Hotels = ({ hotels }) => {
  return (
    <>
      <Row xs={1} md={2} xl={3} className="g-4">
        {hotels &&
          hotels.data?.map((hotel, h, i) => {
            return (
              <div key={hotel.id}>
                <Col>
                  <Card className="mx-5 mb-5 hotel-list">
                    {hotel.attributes.images.data.map((item, id) => {
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
