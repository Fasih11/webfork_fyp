import React, { useEffect } from "react";
import Hero from "../Hero";
import data from "../../data/data.json";
import Heading from "../Heading";
import Footer from "../Footer";
import About from "../About";
import Whatsapp from "../Whatsapp";
import Contact from "../Contact";
import Card from "../Card";
import Product from "../Product";
import Faq from "../Faq";

function HomePage() {
  return (
    <>
      <Hero />

      <Heading text="WebFork Features" />
      <Card />

      <Heading text="WebFork Categories" />
      <Product />
      
      <Heading text="About Us" />
      <About />

      <Heading text="Contact Us" />
      <Contact />

      <Heading text="Faq" />
      <Faq /> 


      <Whatsapp />

      <Footer footer={data.footer} />
     
    </>
  );
}

export default HomePage;
