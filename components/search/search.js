import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import Link from "next/link";
import { useState } from "react";
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
    const { searchHotels } = this.props;

    let suggestions = [];
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = searchHotels.sort().filter((v) => regex.test(v.name));
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
              key={hotel.id}
              onClick={(e) => this.suggestionsSelected(hotel.name)}
            >
              {<Link href={`detail/${hotel.id}`}>{hotel.name}</Link>}
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
        {this.state.suggestions.length === 0 &&
          this.state.text.trim().length !== 0 && (
            <div>
              There are no hotels that starts with <b>{this.state.text}</b>
            </div>
          )}
      </Container>
    );
  }
}
