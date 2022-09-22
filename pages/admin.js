import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../hooks/useAxios";
import AdminEnquiries from "../components/admin/AdminEnquiries";
import AdminMessages from "../components/admin/AdminMessages";
import Heading from "../components/heading";

export default function admin() {
  const router = useRouter();

  const [auth, setAuth] = useContext(AuthContext);
  const [enquiries, setEnquiries] = useState([]);
  const [messages, setMessages] = useState([]);

  if (auth === null) {
    router.push("/");
  }

  function logout() {
    setAuth(null);
    router.push("/");
  }

  const http = useAxios();

  useEffect(function () {
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
    <>
      <div className="flex justify-center items-center flex-col">
        <Head>
          <title>Holidaze | Admin Page</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>
        <div className="w-11/12 md:w-10/12">
          <Heading headingText="Admin page" subHeadingText="" />
          <div className="flex w-full justify-center lg:justify-end items-center mb-7 font-heading text-xl lg:text-2xl">
            <div className="flex justify-center items-center hover:text-greenColor transition ease-out duration-500 border-b-2 border-greenColor border-opacity-0 hover:border-opacity-100">
              {/* <Link href="/newHotel">Add New Hotel</Link> */}
            </div>
          </div>
        </div>
        <div className="mb-10 w-11/12 md:w-10/12">
          <AdminEnquiries enquiries={enquiries} />
        </div>
        <div className="w-11/12 md:w-10/12">
          <AdminMessages messages={messages} />
        </div>
        <div className="flex justify-center md:justify-end items-center w-11/12 md:w-10/12 my-10 font-heading text-xl md:text-2xl mr-2">
          <button
            onClick={logout}
            className="flex justify-center items-center transition ease-out duration-500 border-b-2 border-red-600 border-opacity-0 hover:border-opacity-100 hover:text-red-600"
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
