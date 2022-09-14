import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/layout";
import "../src/scss/styles.scss";
import { primary } from "../src/scss/_variables.scss";

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
