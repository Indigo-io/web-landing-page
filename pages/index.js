import Layout from "components/Layout";
import Hero from "components/Hero";
import Contact from "components/Contact";
import BannerLogo from "components/BannerLogo";
import OurBenefits from "../components/OurBenefits";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OurBenefits />
      <OurServices />
      <BannerLogo />
      <Contact />
      <Footer />
    </Layout>
  );
}
