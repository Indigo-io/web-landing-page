import React from "react";
import Layout from "components/Layout";
import FooterB2C from "../components/FooterB2C";
import HeroB2C from "../components/HeroB2C";
import UserBenefits from "../components/UserBenefits";
import BannerB2C from "../components/BannerB2C";

export default function B2B() {
  return (
    <Layout>
      <HeroB2C />
      <UserBenefits />
      <BannerB2C />
      <FooterB2C />
    </Layout>
  );
}
