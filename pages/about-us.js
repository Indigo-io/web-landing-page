import Layout from "components/Layout";
import HeroAboutUs from "components/HeroAboutUs";
import FooterAboutUs from "../components/FooterAboutUs";
import OurTeam from "../components/OurTeam";
import OurBehaviors from "../components/ourBehaviors";

export default function AboutUs() {
  return (
    <Layout>
      <HeroAboutUs />
      <OurBehaviors />
      <OurTeam />
      <FooterAboutUs />
    </Layout>
  );
}
