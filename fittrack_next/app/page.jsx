import React from "react";
import Hero from "@component/Hero";
import Section1 from "@component/Section1";
import Section2 from "@component/Section2";
import Articles from "@component/articles";
import Section3 from "@component/Section3";
import Download from "@component/Download";
import Testimonal from "@component/Testimonals";
import Getstarted from "@component/GetStarted";
import Newsletter from "@component/Newsletter";
import Footer from "@component/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <Articles />
      <Section3 />
      <Download />
      <Testimonal />

      <Getstarted />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
