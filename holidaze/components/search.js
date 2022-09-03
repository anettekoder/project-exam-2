import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CustomButton from "../components/button";

const SearchInput = () => {
  return (
    <div className="search-box">
      <InputGroup size="lg">
        <Container className="py-5">
          <Row className="g-0">
            <Col xs="12" md="6" className="m-0">
              <Form.Control
                className="pl-2 py-3"
                size="lg"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search for accomandations"
              />
            </Col>
            <Col xs="12" md="6">
              <CustomButton content="Search" />
            </Col>
          </Row>
        </Container>
      </InputGroup>
    </div>
  );
};

export default SearchInput;
