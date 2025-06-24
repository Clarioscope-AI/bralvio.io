import { FC, JSX } from "react";
import SectionHeader from "../ui/sectionHeader/SectionHeader";
import Button from "../ui/button/Button";

const AiResearch: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center py-10 lg:py-20">
      <SectionHeader
        title="Frontier AI Research"
        description="SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative to improve model capabilities through challenging private evaluations and novel research."
      ></SectionHeader>
      <Button
        label="Learn More"
        arrow
        classNames="bg-[#72556f] text-secondary rounded-lg border-1 border-tertiary p-1 lg:p-2 hover:bg-[#5B3557]"
      ></Button>
    </div>
  );
};

export default AiResearch;
