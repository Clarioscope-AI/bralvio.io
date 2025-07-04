"use client";
import { FC, JSX } from "react";
import CaseStudiesSlide from "./CaseStudiesSlide";

const CaseStudies: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center px-4">
        <button className="mb-5 lg:mb-6 overflow-hidden md:tracking-[3px] tracking-[1px] text-[7px] md:px-5 md:py-2 lg:text-xs uppercase bg-black/55 bg-opacity-5 shadow-lg text-[#D1AAD7] rounded-full px-5 py-2 border border-[#D1AAD7] mt-12 lg:mt-28">
          LEARN HOW WE SERVE HEALTHCARE PROVIDERS AND MEDICAL DEVICE MANUFACTURERS
        </button>
        <h2 className="text-2xl md:text-5xl font-semibold text-white mb-4">
          Case Studies & Resources
        </h2>
        <p className="text-sm md:text-xl font-semibold text-gray-300 max-w-xl">
          We&apos;ve worked with leading healthcare organizations and medical device companies to deliver innovative solutions that improve patient outcomes.
        </p>
      </div>
      <div className="mt-12">
        <CaseStudiesSlide />
      </div>
    </>
  );
};

export default CaseStudies;