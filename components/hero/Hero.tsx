import React from "react";
import { heroData } from "@/data/heroData";
const Hero = () => {
  return (
    <div>
      <h1>{heroData.title}</h1>
      <div>{heroData.description}</div>
    </div>
  );
};

export default Hero;
