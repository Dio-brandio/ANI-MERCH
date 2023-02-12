import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      
      <meta name="description" content="Welcome To ANI MERCH website for the weebs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
      
        <link rel="icon" href="/dio-logo.png"/>
    </Head>
    <Navbar/>
      <Component {...pageProps} />
    <Footer />  
    <script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
    </>
  );
}
