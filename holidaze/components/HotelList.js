import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/api";
console.log(BASE_URL);

const HotelList = ({ hotels, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {hotels.data.map((hotel) => (
        <li key={hotel.id}>{hotel.attributes.name}</li>
      ))}
    </ul>
  );
};

HotelList.getInitialProps = async (ctx) => {
  try {
    const results = await axios.get(BASE_URL);
    const hotels = results.data;
    return { hotels };
  } catch (error) {
    return { error };
  }
};

export default HotelList;
