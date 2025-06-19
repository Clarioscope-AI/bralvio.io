import { JSX } from "react";
import { heroData } from "@/data/heroData";
import Button from "@/components/ui/button/Button";

const Hero: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center text-center p-8 h-[300x] lg:h-[550px] border-2">
      <h1 className="lg:w-1/2 mx-auto text-3xl md:text-4xl lg:text-7xl">
        {heroData?.title || ""}
      </h1>
      <p className="w-2/3 lg:w-1/2 mx-auto my-6">
        {heroData?.description || ""}
      </p>
      <div className="flex gap-2">
        <Button
          label="Book a Demo"
          arrow
          classNames="border-2 rounded-lg mt-4 p-2 lg:p-3"
        ></Button>
        <Button
          label="Build AI"
          arrow
          classNames="border-2 rounded-lg mt-4 p-2 lg:p-3"
        ></Button>
      </div>
    </section>
  );
};

export default Hero;
