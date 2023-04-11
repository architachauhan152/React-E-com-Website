import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Ritu E-commerce",
  };

  return <HeroSection myData={data} />;
};

export default Home;