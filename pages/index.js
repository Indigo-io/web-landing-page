import Layout from "components/Layout";
import Hero from "components/Hero";
import Contact from "components/Contact";
import Banner from "components/Banner";
import Footer from "../components/Footer";
import WhatWeAre from "../components/WhatWeAre";
import OurServices from "../components/OurServices";
import HowWeDoIt from "../components/HowWeDoIt";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhatWeAre />
      <OurServices />
      <HowWeDoIt />
      <Benefits />
      <Banner />
      <Contact />
      <Footer />
    </Layout>
  );
}
