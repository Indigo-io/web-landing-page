import React from "react";
import Layout from "components/Layout";
import FooterB2B from "../components/FooterB2B";
import { HeroB2B } from "../components/HeroB2B";
import Programs from "../components/Programs";
import OurFocus from "../components/OurFocus";
import { Demo } from "../components/Demo";

export default function B2B() {
  return (
    <Layout>
      <HeroB2B />
      <Programs />
      <OurFocus />
      <Demo />
      <FooterB2B />
    </Layout>
  );
}
