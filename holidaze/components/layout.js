import Header from "./header";

const Layout = ({ children }) => (
  <>
    <Head>
      <script type="module"></script>
    </Head>
    <Header></Header>
    <main>{children}</main>
  </>
);
export default Layout;
