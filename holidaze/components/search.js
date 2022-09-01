import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import CustomButton from "../components/button";

const SearchInput = () => {
  return (
    <div className="search-box">
      <InputGroup size="lg">
        <Container>
          <Row className="g-0">
            <Col xs="12" md="6" className="m-0">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </Col>
            <Col xs="12" md="6" className="m-0">
              <CustomButton />
            </Col>
          </Row>
        </Container>
      </InputGroup>
    </div>
  );
};

export default SearchInput;
