import { JSX } from "react";
import { heroData } from "@/data/heroData";
import Button from "@/components/ui/button/Button";
import TextCube from "./TextCube";

const Hero: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center text-center p-8 h-[300px] lg:h-[550px] bg-primary text-secondary">
      <h1 className="lg:w-1/2 mx-auto font-normal text-3xl md:text-3xl lg:text-[70px] flex flex-wrap justify-center items-center gap-2">
        Power&nbsp;
        <TextCube />
        &nbsp;With Your Data
      </h1>

      <p className="text-[12px] lg:text-[16px] w-full md:w-2/3 lg:w-1/2 mx-auto my-6">
        {heroData?.description || ""}
      </p>

      <div className="flex flex-col md:flex-row gap-3">
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
    </section>
  );
};

export default Hero;
