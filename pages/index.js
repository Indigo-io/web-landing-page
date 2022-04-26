import Link from "next/link";
import Layout from "components/Layout";
import Hero from "components/Hero";
import Video from "components/Video";
import GooglePlay from "components/GooglePlay";
import Camino from "components/Camino";
import Testimonials from "components/Testimonials";
import Contact from "components/Contact";
import SubHero from "components/SubHero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SubHero />
      <GooglePlay />
      <Camino />
      <GooglePlay />
      <Testimonials />
      <Video />
      <Contact />
    </Layout>
  );
}
