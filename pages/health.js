import Layout from "components/Layout";
import HeroHealth from "../components/HeroHealth";
import Managment from "../components/Managment";
import Ecosystem from "../components/Ecosystem";
import BannerHealth from "../components/BannerHealth";
import HealthAI from "../components/HealthAI";
import Contact from "components/Contact";
import FooterHealth from "../components/FooterHealth";

export default function Health() {
  return (
    <Layout>
      <HeroHealth />
      <Managment />
      <Ecosystem />
      <BannerHealth />
      <HealthAI />
      <Contact />
      <FooterHealth />
    </Layout>
  );
}
