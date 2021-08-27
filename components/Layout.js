import { paths } from "contants/paths";
import Header from "components/Header";
import Footer from "components/Footer";
import BackToTop from "components/BackToTop";
import Head from "next/head";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="Indigo Balance" />
        <link rel="icon" href="/favicon.ico" />
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

        <link href="/favicon.ico" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />
      </Head>
      <Header paths={paths} />

      {children}

      <Footer />
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
