import { FC } from "react";
import Button from "@/components/ui/button/Button";
import Particles from "@/Particles/Particles";

const FutureIndustry: FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-8 h-[300px] lg:h-[500px] bg-primary text-secondary">
      <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
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
      <h3 className="lg:w-1/2 mx-auto font-normal text-3xl md:text-3xl lg:text-[80px] mb-6">
        The future of your industry{" "}
        <span className="bg-gradient-to-r from-[#714DFF] via-[#E151FF] to-[#FFF759] bg-clip-text text-transparent">
          starts here
        </span>
      </h3>
      <div className="flex md:justify-center md:flex-row gap-3 md:mt-7">
        <Button
          label="Book a Demo"
          arrow
          classNames="text-center text-sm text-primary bg-secondary rounded-lg px-2 py-1  lg:px-4 lg:py-2 hover:bg-secondary/90 transition-colors duration-300 "
        />
        <Button
          label="Build AI"
          arrow
          classNames="text-secondary text-sm flex justify-center rounded-lg px-4 py-2 hover:text-secondary/90 transition-colors duration-300 text-center "
        />
      </div>
    </div>
  );
};

export default FutureIndustry;
