import Link from "next/link";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Header2 from "../../assets/images/headers/header2.jpg";
import { BASE_URL } from "../../constant/api";
import Button from "react-bootstrap/Button";

const btnStyle = {
  backgroundColor: "#001C55",
  color: "#ffff",
};

const Hotels = ({ hotels }) => {
  console.log(hotels);
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {hotels &&
          hotels.data.map((hotel) => {
            return (
              <div key={hotel.id}>
                <Col>
                  <Card className="mx-5 mb-5 hotel-list">
                    <Card.Img as={Image} src={Header2} alt="image" />

                    <Card.Body>
                      {" "}
                      <Card.Text className="h3">
                        {hotel.attributes.name}
                      </Card.Text>
                      <Card.Text className="p">
                        <Link
                          href={{
                            pathname: `${BASE_URL}`,
                            query: `${hotel.id}`,
                          }}
                        >
                          Read more
                        </Link>
                      </Card.Text>
                      <Col className="text-end">
                        <p>Price per night</p>
                        <p className="fw-bold">
                          NOK {hotel.attributes.price},-
                        </p>
                        <div className="d-flex justify-content-end">
                          <Button style={btnStyle}>Book hotel</Button>
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
