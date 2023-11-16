import Layout from "components/Layout";
import HeroAboutUs from "components/HeroAboutUs";
import FooterAboutUs from "../components/FooterAboutUs";
import OurValues from "../components/OurValues";
import OurPrinciples from "../components/OurPrinciples";
import GuidingBehaviors from "../components/GuidingBehaviors";
import OurTeam from "../components/OurTeam";

export default function AboutUs() {
  return (
    <Layout>
      <HeroAboutUs />
      <OurValues />
      <OurPrinciples />
      <GuidingBehaviors />
      <OurTeam />
      <FooterAboutUs />
    </Layout>
  );
}
