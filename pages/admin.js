import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../hooks/useAxios";
import AdminEnquiries from "../components/admin/AdminEnquiries";
// import AdminMessages from "../components/admin/AdminMessages";
import Heading from "../components/heading";

export default function Admin() {
  const router = useRouter();

  const [auth, setAuth] = useContext(AuthContext);
  const [enquiries, setEnquiries] = useState([]);
  // const [messages, setMessages] = useState([]);

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
        // const messagesResponse = await http.get("/messages");
        // setMessages(messagesResponse.data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div className="">
        <Head>
          <title>Holidaze | Admin Page</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>
        <div className="">
          <Heading headingText="Admin page" subHeadingText="" />
          <div className="">
            <div className="">
              {/* <Link href="/newHotel">Add New Hotel</Link> */}
            </div>
          </div>
        </div>
        <div className="mb-10 ">
          <AdminEnquiries enquiries={enquiries} />
        </div>
        {/* <div className=""><AdminMessages messages={messages} /></div> */}
        <div className="flex justify-center">
          <button onClick={logout} className="flex justify-center">
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
