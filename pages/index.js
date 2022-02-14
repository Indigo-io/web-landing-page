import Link from "next/link";
import Layout from "components/Layout";
import Hero from "components/Hero";
import Video from "components/Video";
import GooglePlay from "components/GooglePlay";
import Camino from "components/Camino";
import Services from "components/Services";
import Testimonials from "components/Testimonials";
import Faq from "components/Faq";
import Contact from "components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Video />
      <GooglePlay />
      <Camino />
      <Services />
      <GooglePlay />
      <Testimonials />
      <Faq />
      <Contact />
    </Layout>
  );
}
