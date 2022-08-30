import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/layout";
import "../src/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
