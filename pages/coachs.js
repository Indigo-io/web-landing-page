import Layout from "components/Layout";
import HeroCoach from "components/HeroCoach";
import Benefist from "components/Benefist";
import Contact from "components/Contact";
import BannerLogo from "components/BannerLogo";

export default function Coachs() {
    return (
        <Layout>
            <HeroCoach />

            <Benefist />

            <BannerLogo />

            <Contact />
        </Layout>
    );
}