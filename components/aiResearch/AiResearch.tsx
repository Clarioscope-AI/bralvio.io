import { FC, JSX } from "react";
import SectionHeader from "@/components/ui/sectionHeader/SectionHeader";
import Button from "@/components/ui/button/Button";
import Slider from "@/components/aiResearch/Slider";

const AiResearch: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-8 lg:my-28">
        <SectionHeader
          title="Medical Innovation Research"
          description="MIRL (Medical Innovation Research Lab) is our research initiative to improve healthcare outcomes through clinical evaluations and novel medical device development."
        ></SectionHeader>
        <Button
          label="Learn More"
          arrow
          classNames="text-center text-secondary bg-tertiary rounded-lg px-4 py-2 "
        />
      </div>
      <div>
        <Slider></Slider>
      </div>
    </>
  );
};

export default AiResearch;