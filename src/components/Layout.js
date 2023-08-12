import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Foode</title>
        <link rel="icon" href="/dish.png" sizes="any" />
      </Head>
      <div className=" flex flex-col h-screen justify-between ">
        <Nav />
        <main className="bg-[#ffffff]  ">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
