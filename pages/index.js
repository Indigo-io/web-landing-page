<<<<<<< HEAD

import Layout from "components/Layout";
import Hero from "components/Hero";
import GooglePlay from "components/GooglePlay";
import Camino from "components/Camino";
import Contact from "components/Contact";
import SubHero from "components/SubHero";
import KnowMore from "components/KnowMore";
=======
import Link from "next/link";
import Layout from "components/Layout";
import Hero from "components/Hero";
import Video from "components/Video";
import GooglePlay from "components/GooglePlay";
import Camino from "components/Camino";
import Testimonials from "components/Testimonials";
import Contact from "components/Contact";
import SubHero from "components/SubHero";
>>>>>>> aee4788c2ecff0effaa5b499c346670d148f8fe9

export default function Home() {
  return (
    <Layout>
      <Hero />
<<<<<<< HEAD
      
      <Camino />
      <GooglePlay />
      
      <SubHero />
      <KnowMore />

=======
      <SubHero />
      <GooglePlay />
      <Camino />
      <GooglePlay />
      <Testimonials />
      <Video />
>>>>>>> aee4788c2ecff0effaa5b499c346670d148f8fe9
      <Contact />
    </Layout>
  );
}
