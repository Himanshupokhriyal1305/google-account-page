import Head from "next/head";
import Feature from "../components/feature";
import Footer from "../components/footer";
import GoToGoogle from "../components/go-to-google";
import Header from "../components/header";
import HeroContainer from "../components/hero";
import Sidebar from "../components/sidebar";
import TabsAndSliderSection from "../components/tab-and-slider-section";
import { CONTAINER_DETAILS } from "../constant";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      {/* Adding Meta tags for SEO */}
      <Head>
      <link rel="icon" href="/snaptik site icon.png" />
        <title>Tik Tok video downloader</title>
        <meta />
      </Head>

      
      
      <HeroContainer />
     {/* <Feature />*/}
     <Header />
     {/* {CONTAINER_DETAILS.map((detail) => (
        <TabsAndSliderSection key={detail.id} containerDetail={detail} />
      ))}
      <GoToGoogle /> */}
      <Footer />
    </>
  );
}

export async function getStaticProps({locale}: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['hero','header']))
    }
  }
}