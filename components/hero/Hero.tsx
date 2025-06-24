
import React, { JSX } from "react";
import { heroData } from "@/data/heroData";
import Button from "@/components/ui/button/Button";
import TextCube from "./TextCube";
import Particles from "@/Particles/Particles";

const Hero: React.FC = (): JSX.Element => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center p-8 h-[300px] lg:h-[550px] bg-primary text-secondary mt-[80px] md:mt-0">
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#714DFF", "#9C83FF", "#E151FF", "#FFF759"]}
          moveParticlesOnHover={false}
          particleHoverFactor={0.5}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10">
        <h1 className="lg:w-1/2 mx-auto font-normal text-3xl md:text-3xl lg:text-[70px] flex flex-wrap justify-center items-center gap-2">
          Power 
          <TextCube
            data={heroData?.keywords}
            gradients="linear-gradient(50deg, #714DFF, #9C83FF 31.28%, #E151FF 77.97%, #FFF759 95.64%)"
          />
           With Your Data
        </h1>

        <p className="text-[12px] lg:text-[16px] w-full md:w-2/3 lg:w-1/2 mx-auto my-6">
          {heroData?.description || ""}
        </p>

        <div className="flex flex-col lg:justify-center md:flex-row gap-3">
          <Button
            label="Book a Demo"
            arrow
            classNames="text-primary bg-secondary rounded-lg px-4 py-2 hover:bg-secondary/90 transition-colors duration-300"
          />
          <Button
            label="Build AI"
            arrow
            classNames="text-secondary flex justify-center rounded-lg px-4 py-2 hover:text-secondary/90 transition-colors duration-300 text-center md:text-start"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;