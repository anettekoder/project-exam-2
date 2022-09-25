import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import Link from "next/link";
import { Col, Container, ListGroupItem, Row } from "react-bootstrap";

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChange = (e) => {
    const { hotelNames } = this.props;

    let suggestions = [];
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = hotelNames.sort().filter((v) => regex.test(v));
    }

    this.setState(() => ({
      suggestions,
      text: value,
    }));
  };

  suggestionsSelected = (value) => {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  };

  renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <Col xs={12}>
        <ListGroup variant="flush">
          {suggestions.map((hotel) => (
            <ListGroupItem
              key={hotel}
              onClick={(e) => this.suggestionsSelected(hotel)}
            >
              {<Link href={`detail/${hotel.id}`}>{hotel}</Link>}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    );
  };

  render() {
    const { text } = this.state;
    return (
      <Container className="text-left">
        <Row>
          <Col xs={12}>
            {" "}
            <InputGroup size="lg">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.onTextChange}
                value={text}
                type="text"
                placeholder="Search for hotel"
              />
              {this.renderSuggestions()}
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
