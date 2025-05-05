import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Navbar from "../Navbar";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
