import Head from "next/head";
import axios from "axios";
import Heading from "../../components/heading";
import { BASE_URL } from "../../constant/api";

const url = BASE_URL + "accomodations";

export default function Details({ hotel }) {
  return (
    <div>
      <Head>
        <title>Holidaze | Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading
        headingText="Detail page"
        subHeadingText="Experience Bergen's best hotels"
      />
      <h1>{hotel.attributes.name}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const response = await fetch(url);

    const hotels = response.data.data;

    const paths = hotels.map((hotel) => ({
      params: { id: hotel.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}
export async function getStaticProps({ params }) {
  const newUrl = `${BASE_URL}/${params.id}`;

  let hotel = null;

  try {
    const response = await fetch(newUrl);

    hotel = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotel: hotel },
  };
}
