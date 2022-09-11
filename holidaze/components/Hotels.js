import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";

const Hotels = ({ hotels }) => {
  console.log(hotels);
  return (
    <>
      <div className="hotel-list">
        {hotels &&
          hotels.data.map((hotel) => {
            return (
              <li key={hotel.id}>
                <Card className="h3 hotel-list mx-4 px-5 py-5">
                  <Container>
                    <Row>
                      <Col xs={4} className="hotel-list-card">
                        <Card.Text>Image comes here</Card.Text>
                        <Card.Img
                          as={Image}
                          src={hotel.attributes.images.url}
                          alt="image"
                        />
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <Card.Text>{hotel.attributes.name}</Card.Text>
                      </Col>
                    </Row>
                  </Container>
                </Card>
              </li>
            );
          })}
      </div>
    </>
  );
};

export default Hotels;
