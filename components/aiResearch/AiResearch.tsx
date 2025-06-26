import { FC, JSX } from "react";
import SectionHeader from "@/components/ui/sectionHeader/SectionHeader";
import Button from "@/components/ui/button/Button";
import Slider from "@/components/aiResearch/Slider";

const AiResearch: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-8 lg:my-28">
        <SectionHeader
          title="Frontier AI Research"
          description="SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative to improve model capabilities through challenging private evaluations and novel research."
        ></SectionHeader>
        <Button
          label="Lern More"
          arrow
          classNames="text-center text-secondary bg-tertiary rounded-lg px-4 py-2 hover:bg-secondary/90 transition-colors duration-300 "
        />
      </div>
      <div>
        <Slider></Slider>
      </div>
    </>
  );
};

export default AiResearch;
