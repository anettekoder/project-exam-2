import Head from "next/head";
import Heading from "../components/heading";
import LoginForm from "../components/admin/LoginForm";

export default function Login() {
  return (
    <>
      <Head>
        <title>Holidaze | Log in</title>
        <meta name="description" content="Holidaze Booking Log in page" />
        <link rel="icon" href="/favicon-holidaze.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <div className="grid pt-5">
        <Heading headingText="Log in" />
        <LoginForm />
      </div>
    </>
  );
}
