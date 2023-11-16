import Layout from "components/Layout";
import HeroCoach from "components/HeroCoach";
import Benefits from "components/Benefits";
import Camino from "components/Camino";
import GooglePlay from "components/GooglePlay";
import SubHero from "components/SubHero";
import TestimonialsCoach from "../components/TestimonialsCoach";
import Contact from "components/Contact";
import BannerPhrase from "components/BannerPhrase";
import FooterCoachs from "../components/FooterCoach";

export default function Coachs() {
  return (
    <Layout>
      <HeroCoach />
      <Benefits />
      <BannerPhrase />
      <Camino />
      <GooglePlay />
      <SubHero />
      <TestimonialsCoach />
      <Contact />
      <FooterCoachs />
    </Layout>
  );
}
