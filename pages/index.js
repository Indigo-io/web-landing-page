import Layout from "components/Layout";
import Hero from "components/Hero";
import Contact from "components/Contact";
import BannerHero from "components/BannerHero";
import OurBenefits from "../components/OurBenefits";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OurBenefits />
      <BannerHero />
      <Contact />
      <Footer />
    </Layout>
  );
}
