import Hotels from "../components/Hotels";

const HotelList = ({ hotels }) => {
  return (
    <>
      <h1>Hotel list:</h1>
      <Hotels hotels={hotels} />
    </>
  );
};

export default HotelList;
