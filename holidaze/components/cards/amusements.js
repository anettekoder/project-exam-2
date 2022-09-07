import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Floyen from "../../assets/images/excursions/floyen.jpg";
import Grieg from "../../assets/images/excursions/grieg.jpg";
import Shopping from "../../assets/images/excursions/shopping.jpg";

// Card details

// Amusements cards

const AmusementsCards = () => {
  const CardDetails = [
    {
      image: Floyen,
      title: "Be transported by Fløybanen to the top of Fløyfjellet",
      text: "Get a beautiful view over the whole city of Bergen from the top of Fløyen.",
      alt: "Fløybanen with a view of Bergen city in the background",
    },
    {
      image: Grieg,
      title: "Edvard Grieg Museum -Troldhaugen.",
      text: "Troldhaugen has its own museum shop with a rich selection of souvenirs, books, music and gift items. ",
      alt: "Edvard Griegs yellow house on Trollhaugen in Bergen",
    },
    {
      image: Shopping,
      title: "In Bergen you will find a large and tempting selection of shops.",
      text: "Go shoping in small and specialized shops to large department stores.",
      alt: "Inside the shopping center, Galleriet",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <Col key={index}>
        <Card className="h-100 d-flex amusement-card">
          <Card.Img as={Image} variant="top" src={card.image} />

          <Card.Body height="200px">
            <Card.Title className="h3">{card.title}</Card.Title>
            <Card.Text className="p">{card.text}</Card.Text>
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
