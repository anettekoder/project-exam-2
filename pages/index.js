import Head from "next/head";
import axios from "axios";
import AmusementsCards from "../components/cards/amusements";
import JumbotronLarge from "../components/jumbotron/jumbotronLarge";
import { BASE_URL } from "../constant/api";
import Searchbar from "../components/search/search";

const styleSection = {
  paddingTop: "100px",
};

export default function Home({ hotels }) {
  const hotelNames = hotels?.map((hotel) => hotel.attributes.name);
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Holidaze is a hotel booking site, specialized on hotels in Bergen"
        />
        <link rel="icon" href="../assets/logo/favicon-holidaze.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Holidaze | Home</title>
      </Head>

      <JumbotronLarge />

      <Searchbar hotelNames={hotelNames} />
      <div className="h3 text-center" style={styleSection}>
        Experience in Bergen
      </div>
      <AmusementsCards />
    </div>
  );
}

export async function getServerSideProps() {
  let hotels = [];

  try {
    const response = await axios.get(BASE_URL + "accomodations/?populate=*");
    hotels = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      hotels: hotels,
    },
  };
}
