import "../app/globals.css"; // Adjust the path to your global CSS file
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <div className="  p-2">
            <Component {...pageProps} />

        </div>
    </Layout>
  );
}

export default MyApp;