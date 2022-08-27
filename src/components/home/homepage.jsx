import React, { useEffect } from "react";
import Hero from "../Hero";
import data from "../../data/data.json";
import Heading from "../Heading";
import Footer from "../Footer";
import About from "../About";
import Whatsapp from "../Whatsapp";
import Contact from "../Contact";
import Product from "../Product";
import Team from "../Team";
import ChooseUs from "../ChooseUs";


function HomePage() {
  return (
    <>
       <Hero />

      <Heading text="WebFork Team" />
      <Team />

      <Heading text="WebFork Features" />
      <ChooseUs />

       <Heading text="WebFork Categories" />
      <Product />
      
     <Heading text="About Us" />
      <About />

       <Heading text="Contact Us" />
      <Contact />

      <Whatsapp />

      {/* added footer data */}

      <Footer footer={data.footer} />
     
    </>
  );
}

export default HomePage;
