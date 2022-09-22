import Image from "next/image";
import { useState } from "react";

const HotelDetails = ({ hotels }) => {
  return (
    <>
      {hotels &&
        hotels.data.map((hotel, h, i) => {
          return (
            <div key={hotel.id}>
              <Col>
                <Card className="mx-5 mb-5 hotel-list">
                  <Card.Img as={Image} key={i} src={Header2} alt="image" />

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
                      <p className="fw-bold">NOK {hotel.attributes.price},-</p>
                      <div className="d-flex justify-content-end">
                        <EnquiryModal />
                      </div>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          );
        })}
    </>
  );
};

export default HotelDetails;
