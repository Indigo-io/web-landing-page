import Layout from "components/Layout";
import Hero from "components/Hero";
import Contact from "components/Contact";
import BannerLogo from "components/BannerLogo";
import OurBenefits from "../components/OurBenefits";
import OurServices from "../components/OurServices";
import Testimonials2 from "../components/Testimonals2";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OurBenefits />
      <OurServices />
      <Testimonials2 />
      <BannerLogo />
      <Contact />
      <Footer />
    </Layout>
  );
}
