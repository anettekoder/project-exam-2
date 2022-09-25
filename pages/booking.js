import Head from "next/head";
import Image from "next/image";
import JumbotronSmall from "../components/jumbotron/jumbotronSmall";
import Header2 from "../public/images/header2.jpg";
import Heading from "../components/heading";
import HotelList from "./HotelList";
import { BASE_URL } from "../constant/api";

export default function Booking(props) {
  const { hotels } = props;
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Book your accomodattion with Holidaze Booking. You find Bergens best hotels with us"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Holidaze | Booking</title>
        <link rel="icon" href="./favicon-holidaze.png" />
      </Head>
      <main>
        <JumbotronSmall imgPath={Header2} />
        <div className="container">
          <Heading
            headingText="Experience Bergen with Holidaze"
            subHeadingText="Choose between Bergen`s best hotels"
          />
        </div>

        <HotelList hotels={hotels} />
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  let hotels = [];

  try {
    const response = await fetch(BASE_URL + "accomodations/?populate=*");
    hotels = await response.json();
  } catch (error) {
    console.log(error);
  }

  return { props: { hotels } };
}
