
import Layout from "components/Layout";
import Hero from "components/Hero";
import GooglePlay from "components/GooglePlay";
import Camino from "components/Camino";
import Contact from "components/Contact";
import SubHero from "components/SubHero";
import KnowMore from "components/KnowMore";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Camino />
      <GooglePlay />
      <SubHero />
      <KnowMore />
      <Contact />
    </Layout>
  );
}
