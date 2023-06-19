import React from "react";
import Hero from "../Component/Hero";
import Section1 from "../Component/Section1";
import Section2 from "../Component/Section2";
import Articles from "../Component/articles";
import Section3 from "../Component/Section3";
import Download from "../Component/Download";
import Testimonal from "../Component/Testimonals";
import Getstarted from "../Component/GetStarted";
import Newsletter from "../Component/Newsletter";
import Footer from "../Component/Footer";


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
