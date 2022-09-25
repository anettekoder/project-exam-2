import Head from "next/head";
import Heading from "../components/heading";
import LoginForm from "../components/../components/admin/LoginForm";

export default function Login() {
  return (
    <>
      <Head>
        <title>Holidaze | Log in</title>
        <meta name="description" content="Holidaze Booking Log in page" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <div className="grid place-content-center">
        <Heading content="Log in" />
        <LoginForm />
      </div>
    </>
  );
}
