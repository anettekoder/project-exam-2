import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/layout";
import "../src/scss/styles.scss";

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
