import { FC, JSX } from "react";
import SectionHeader from "@/components/ui/sectionHeader/SectionHeader";
import Button from "@/components/ui/button/Button";
import Slider from "@/components/aiResearch/Slider";

const AiResearch: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-8 lg:my-12">
        <SectionHeader
          title="Frontier AI Research"
          description="SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative to improve model capabilities through challenging private evaluations and novel research."
        ></SectionHeader>
        <Button
          label="Learn More"
          arrow
          classNames="bg-[#D2ACD8] group:hover-bg-[#5B3557] border-1 border-purple-700 p-2 text-secondary rounded-lg"
        ></Button>
      </div>
      <div>
        <Slider></Slider>
      </div>
    </>
  );
};

export default AiResearch;
