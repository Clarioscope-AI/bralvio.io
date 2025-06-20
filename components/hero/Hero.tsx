import { JSX } from "react";
import { heroData } from "@/data/heroData";
import Button from "@/components/ui/button/Button";

const Hero: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center text-center p-8 h-[300x] lg:h-[550px] bg-primary text-secondary">
      <h1 className="lg:w-1/2 mx-auto text-3xl md:text-3xl lg:text-[62px]">
        {heroData?.title || ""}
      </h1>
      <p className="text-[12px] lg:text-[16px] w-full md:w-2/3 lg:w-1/2 mx-auto my-6">
        {heroData?.description || ""}
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        <Button
          label="Book a Demo"
          arrow
          classNames="text-primary bg-secondary rounded-lg px-4 py-2 hover:bg-secondary/90 transition-colors duration-300"
        ></Button>
        <Button
          label="Build AI"
          arrow
          classNames="text-secondary flex justify-center rounded-lg px-4 py-2 hover:text-secondary/90 transition-colors duration-300 text-center md:text-start"
        ></Button>
      </div>
    </section>
  );
};

export default Hero;
