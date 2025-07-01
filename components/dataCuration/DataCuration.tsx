import { FC, JSX } from "react";

import Button from "@/components/ui/button/Button";
import dataCurate from "@/assets/dataCurate.png";
import Image from "next/image";

const DataCuration: FC = (): JSX.Element => {
  return (
    <div className="my-10 lg:my-28 w-full px-4 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#080609] p-8 lg:px-8 lg:py-16 rounded-xl">
        <div className="bg-[#080609] p-2 rounded-2xl border-1 border-secondary/10">
          <Image src={dataCurate} alt="engine" className="rounded-lg"></Image>
        </div>
        <div className="text-secondary flex flex-col justify-center items-start">
          <h3 className="text-3xl lg:text-4xl mb-3 font-semibold">
            Data Curation
          </h3>
          <p className="text-gray-400">
            Unearth the most valuable data by intelligently managing your
            dataset.
          </p>
          <p className="text-[14px] lg:text-[16px] my-7">
            Bralvio suits of database management, testing, model evaluation, and
            model comparison tools ennable you to lebel what matters. Maximize
            the value of your labeling budget by identifying the highest value
            data to label even without ground truth labels.
          </p>
          <Button
            label="Curate My Data"
            arrow
            classNames="text-center text-secondary bg-tertiary rounded-lg px-4 py-2 hover:bg-secondary/90 hover:text-primary transition-colors duration-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default DataCuration;
