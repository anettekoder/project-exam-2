import Head from "next/head";
import axios from "axios";
import Heading from "../../components/heading";
import { BASE_URL } from "../../constant/api";

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + "accomodations/?populate=*");
    console.log(response.data);
    const hotels = response.data.data;
    const paths = hotels.data.map((hotel) => ({
      params: { id: hotel.id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}
export async function getStaticProps({ params }) {
  const url = `${BASE_URL}/${params.id}`;

  let hotel = null;

  try {
    const response = await axios.get(url);

    game = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotel: hotel },
  };
}

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
      <h1>{hotel.name}</h1>
    </div>
  );
}
