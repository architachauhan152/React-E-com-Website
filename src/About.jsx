import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productContext";

const About = () => {
  const myname=useProductContext()

  const data = {
    name: "Ritu E-commerce",
  };
  

  return <><h1>{myname}</h1>
  <HeroSection myData={data} /></>
};

export default About;