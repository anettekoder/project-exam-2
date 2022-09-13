import Head from "next/head";
import Image from "next/image";
import JumbotronSmall from "../components/jumbotron/jumbotronSmall";
import Header2 from "../assets/images/headers/header2.jpg";
import Heading from "../components/heading";
import HotelList from "./HotelList";
import { BASE_URL } from "../constant/api";

export default function Booking(props) {
  const { hotels } = props;
  return (
    <div>
      <Head>
        <title>Booking</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <JumbotronSmall imgPath={Header2} />
        <div className="">
          <Heading
            headingText="Book accommodation for your next trip."
            subHeadingText="Experience Bergen's best hotels"
          />
        </div>

        <HotelList hotels={hotels} />
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const response = await fetch(BASE_URL + "?populate=*");
  const hotels = await response.json();

  return { props: { hotels } };
}
