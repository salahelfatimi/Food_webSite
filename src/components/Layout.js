import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Food</title>
      </Head>
      <div className=" flex flex-col h-screen justify-between ">
        <Nav />
        <main className="bg-[#ffffff] h-screen">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;