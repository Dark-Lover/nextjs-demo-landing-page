import Head from "next/head";

import Header from "../components/header";
import About from "../sections/about";
import Footer from "../sections/footer";
import OurServices from "../sections/services";

export default function Home() {
  return (
    <div>
      <Head>
        <title> NextGen Company | Houssine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <OurServices />
      <About />
      <Footer />
      <main></main>
    </div>
  );
}
