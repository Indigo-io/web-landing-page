import Layout from "components/Layout";
import HeroAboutUs from "components/HeroAboutUs";
import FooterAboutUs from "../components/FooterAboutUs";
import OurTeam from "../components/OurTeam";
import OurValues from "../components/OurValues";

export default function AboutUs() {
  return (
    <Layout>
      <HeroAboutUs />
      <OurValues />
      <OurTeam />
      <FooterAboutUs />
    </Layout>
  );
}
