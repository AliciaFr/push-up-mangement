import Services from "./components/Services";
import PageDivider from "./components/PageDivider";
import PageTitle from "./components/PageTitle";
import AdditionalImages from "./components/AdditionalImages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "next/head";

import ParagraphImage from "./components/Image";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="page">
        <PageTitle />
        <PageDivider />
        <ParagraphImage
          src="/image1.jpg"
          alt="Hero Bild mit Dominik Hülshorst der Schlagzeug auf einer Bühne spielt"
          className="hero"
        />
        <PageDivider />
        <Services />
        <PageDivider />
        <AdditionalImages />
        <PageDivider />
        <Contact />
        <PageDivider />
        <Footer />
      </div>
    </>
  );
}

