import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../hooks/useAxios";
import AdminEnquiries from "../components/admin/AdminEnquiries";
import AdminMessages from "../components/admin/AdminMessages";
import Heading from "../components/heading";
import { Button } from "react-bootstrap";
import { AddHotelModal } from "../components/admin/AddHotelModal";

export default function Admin() {
  const router = useRouter();

  const [auth, setAuth] = useContext(AuthContext);
  const [enquiries, setEnquiries] = useState([]);
  const [messages, setMessages] = useState([]);

  function logout() {
    setAuth(null);
    router.push("/");
  }

  const http = useAxios();

  useEffect(function () {
    if (auth === null) {
      router.push("/");
    }

    async function getData() {
      try {
        const enquiriesResponse = await http.get("/enquiries");
        setEnquiries(enquiriesResponse.data);
        const messagesResponse = await http.get("/messages");
        setMessages(messagesResponse.data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <div className="mx-5">
      <Head>
        <meta name="description" content="Admin page for Holidaze Booking" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Holidaze | Admin Page</title>
        <link rel="icon" href="/favicon-holidaze.png" />
      </Head>
      <main>
        <div className="mt-5">
          <Heading headingText="Admin page" />

          <AdminEnquiries enquiries={enquiries} />

          <AdminMessages messages={messages} />

          <Button
            type="submit"
            onClick={logout}
            variant="secondary"
            className="m-5"
          >
            Log out
          </Button>
          <AddHotelModal />
        </div>
      </main>
    </div>
  );
}
