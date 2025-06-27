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
          label="Build AI"
          classNames="rounded-3xl px-3 lg:px-6 text-tertiary bg-[#080609]"
        ></Button>
        <SectionHeader
          title="Bralvio Data Engine"
          description="For AI teams, Bralvio Data Engine improves your models by improving your data."
        ></SectionHeader>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#080609] p-8 lg:px-8 lg:py-16 rounded-xl">
        <div className="bg-[#080609] p-2 rounded-2xl border-1 border-secondary/10">
          <Image src={engine} alt="engine" className="rounded-lg"></Image>
        </div>
        <div className="text-secondary flex flex-col justify-center items-start">
          <h3 className="text-3xl lg:text-4xl mb-3 font-semibold">RLHF</h3>
          <p className="text-gray-400">
            Powering the next generation of Generative AI Label My Data
          </p>
          <p className="text-[14px] lg:text-[16px] my-7">
            Scale Generative AI Data Engine powers the most advanced LLMs and
            generative models in the world through world-class RLHF, data
            generation, model evaluation, safety, and alignment.
          </p>
          <Button
            label="Label My Data"
            arrow
            classNames="text-center text-secondary bg-tertiary rounded-lg px-4 py-2 hover:bg-secondary/90 hover:text-primary transition-colors duration-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default DataEngine;
