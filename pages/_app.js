import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/layout";
import "../src/scss/styles.scss";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SSRProvider>
  );
}

export default MyApp;
