import Layout from "components/Layout";
import HeroCoach from "components/HeroCoach";
import DownloadCoaches from "components/DownloadCoaches";
import Contact from "components/Contact";
import FooterCoachs from "../components/FooterCoach";

export default function Coachs() {
  return (
    <Layout>
      <HeroCoach />
      <DownloadCoaches />
      <Contact />
      <FooterCoachs />
    </Layout>
  );
}
