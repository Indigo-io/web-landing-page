import HeaderSingle from "components/HeaderSingle";
import FooterSimple from "components/FooterSimple";
import BackToTop from "components/BackToTop";
import Head from "next/head";
import Script from "next/script";

export default function LayoutSimple({ bgColor, children }) {
  return (
    <>
      <Head>
        <meta name="description" content="Indigo Balance" />
        <link rel="icon" href="/logoIndigo_favicon-05.png" />
        <meta charSet="utf-8" />
        <title>Indigo Balance</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />

        <link
          href="images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="images/webclip.png" rel="apple-touch-icon" />

        <link href="/logoIndigo_favicon-05.png" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />
      </Head>
      <HeaderSingle bgColor={bgColor} />

      <div className="gradient">{children}</div>
      <FooterSimple />
      <BackToTop />
      <Script src="/vendor/aos/aos.js" strategy="beforeInteractive"></Script>
      <Script
        src="/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/vendor/php-email-form/validate.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/vendor/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      ></Script>

      <Script src="/js/main.js" strategy="beforeInteractive"></Script>
    </>
  );
}
