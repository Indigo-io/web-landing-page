import Layout from "components/Layout";
import FooterWhiteLabel from "../components/FooterWhiteLabel";
import HeroWhiteLabel from "../components/HeroWhiteLabel";
import WhiteLabelSteps from "../components/WhiteLabelSteps";
import WhiteLabelBanner from "../components/WhiteLabelBanner";
import Contact from "components/Contact";

export default function WhiteLabel() {
  return (
    <Layout>
      <HeroWhiteLabel />
      <WhiteLabelSteps />
      <WhiteLabelBanner />
      <Contact />
      <FooterWhiteLabel />
    </Layout>
  );
}
