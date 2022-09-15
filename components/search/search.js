import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CustomButton from "../button";
import React from "react";
import Link from "next/link";

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
    console.log(hotelNames);
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
      <ul className="w-full bg-gray-200 p-3 text-black">
        {suggestions.map((hotel) => (
          <li key={hotel} onClick={(e) => this.suggestionsSelected(hotel)}>
            {<Link href={"/booking"}>{hotel}</Link>}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { text } = this.state;
    return (
      <div className="w-full md:w-2/4 xl:w-full mb-11">
        <input
          className="bg-gray-100 text-black border-black border-2 placeholder-black pl-5 font-heading h-12 lg:h-14 focus:border-black focus:ring-black w-full"
          onChange={this.onTextChange}
          value={text}
          type="text"
          placeholder="Search..."
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

// const SearchInput = () => {
//   return (
//     <div className="search-box">
//       <InputGroup size="lg">
//         <Container className="py-5">
//           <Row className="g-0">
//             <Col xs="12" md="6" className="m-0">
//               <Form.Control
//                 id="search-bar"
//                 className="pl-2 py-3"
//                 size="lg"
//                 aria-label="Small"
//                 aria-describedby="inputGroup-sizing-sm"
//                 placeholder="Search for accomandations"
//               />
//             </Col>
//             <Col xs="12" md="6">
//               <CustomButton content="Search" />
//             </Col>
//           </Row>
//         </Container>
//       </InputGroup>
//     </div>
//   );
// };

// export default SearchInput;

// //Fetch hotels
// export async function getServerSideProps() {
//   let hotels = [];

//   try {
//     const response = await fetch(BASE_URL + "?populate=*");
//     hotels = await response.json();
//   } catch (error) {
//     console.log(error);
//   }

//   return { props: { hotels } };
// }
