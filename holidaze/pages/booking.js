import Head from "next/head";
import Image from "next/image";
import JumbotronSmall from "../components/jumbotron/jumbotronSmall";
import Header2 from "../assets/images/headers/header2.jpg";
import Heading from "../components/heading";

export default function Booking() {
  return (
    <div>
      <Head>
        <title>Booking</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <JumbotronSmall imgPath={Header2} />
        <Heading headingText="Booking" />
        <h2>This is a sub-header</h2>
        <h3>Sub-header number 3</h3>
        <p>Lorem ipsum shdfhskjdhfkjshdfkjsahdkjfhksjdahkhsdfjdsk</p>
      </main>
    </div>
  );
}
