import { FC, JSX } from "react";
import SectionHeader from "@/components/ui/sectionHeader/SectionHeader";
import Button from "@/components/ui/button/Button";
import engine from "@/assets/engine.png";
import Image from "next/image";

const DataEngine: FC = (): JSX.Element => {
  return (
    <div className="my-10 lg:my-28 w-full px-4 lg:px-28">
      <div className="flex flex-col items-center mb-4 lg:mb-10">
        <Button
          label="Medical Innovation"
          classNames="rounded-3xl px-3 lg:px-6 text-tertiary bg-[#080609]"
        ></Button>
        <SectionHeader
          title="Bralvio Medical Platform"
          description="For healthcare teams, Bralvio Medical Platform improves patient outcomes by enhancing your medical devices."
        ></SectionHeader>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#080609] p-8 lg:px-8 lg:py-16 rounded-xl">
        <div className="bg-[#080609] p-2 rounded-2xl border-1 border-secondary/10">
          <Image src={engine} alt="Medical Device Platform" className="rounded-lg"></Image>
        </div>
        <div className="text-secondary flex flex-col justify-center items-start">
          <h3 className="text-3xl lg:text-4xl mb-3 font-semibold">Clinical Intelligence</h3>
          <p className="text-gray-400">
            Powering the next generation of medical devices and healthcare solutions
          </p>
          <p className="text-[14px] lg:text-[16px] my-7">
            Bralvio Medical Platform powers the most advanced healthcare technologies through 
            world-class clinical data processing, medical device integration, regulatory compliance, 
            and patient-centered design.
          </p>
          <Button
            label="Enhance Your Devices"
            arrow
            classNames="text-center text-secondary bg-tertiary rounded-lg px-4 py-2 hover:bg-secondary/90 hover:text-primary transition-colors duration-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default DataEngine;