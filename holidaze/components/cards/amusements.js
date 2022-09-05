import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Floyen from "../../assets/images/excursions/floyen.jpg";

// Card details

// Amusements cards

const AmusementsCards = () => {
  const CardDetails = [
    {
      image: { Floyen },
      title: "Be transported by Fløybanen to the top of Fløyfjellet",
      text: "Get a beautiful view over the whole city of Bergen from the top of Fløyen.",
      key: "floyen",
    },
    {
      image: "",
      title: "Edvard Grieg Museum -Troldhaugen.",
      text: "Troldhaugen has its own museum shop with a rich selection of souvenirs, books, music and gift items. ",
      key: "Edvard",
    },
    {
      image: "",
      title: "In Bergen you will find a large and tempting selection of shops.",
      text: "Go shoping in small and specialized shops to large department stores.",
      key: "shopping",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <Col>
        <Card key={index}>
          <Card.Img variant="top" src="" />

          <Card.Body>
            <Card.Title className="h3">{card.title}</Card.Title>
            <Card.Text className="p">
              Get a beautiful view over the whole city of Bergen from the top of
              Fløyen.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Row xs={1} md={3} className="g-4 p-5">
      {CardDetails.map(renderCard)}
    </Row>
  );
};

export default AmusementsCards;
