"use client";
import React, { useState } from "react";
import Image from "next/image";
import { sections } from "@/data/generativeAI";
import Button from "../ui/button/Button";
import { SectionType } from "@/types/generativeAI";

const DesktopEnterpriseAi: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("new-feature");
  
  const textSections = sections.filter(
    (section) => section.id !== "new-feature"
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 mb-16">
        <button className="mb-5 lg:mb-2 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-black/55 bg-opacity-5 shadow-lg text-[#D1AAD7] rounded-full px-4 py-2 border-1">
          AI for the Enterprise
        </button>
        <h1 className="text-[#FFFFFF] text-5xl font-semibold py-4">
          Generative AI Architecture
        </h1>
        <p className="text-[#FFFFFF] text-lg w-[600px] text-center">
          Whether you’re building your own models or applying foundation models
          to your business, data remains the biggest bottleneck to AI.
        </p>
        <Button
          label="Book a Demo"
          arrow
          classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-4 py-2 hover:bg-[#5B3557] transition-colors duration-300 mt-5"
        />
      </div>

      <div className="hidden xl:flex flex-row items-center justify-center min-h-[624px] mt-0 mb-16 relative isolate">
        <div className="relative z-10 w-6/12 min-w-[510px] -mr-9 pr-9">
          <div className="relative w-full">
            {textSections.map((section, index) => (
              <div
                key={section.id}
                className={`group border-b ${
                  index === textSections.length - 1
                    ? "border-transparent"
                    : "border-white/10"
                } hover:border-white hover:last:border-white transition-all duration-300 cursor-pointer ${
                  activeSection === "new-feature"
                    ? "opacity-100"
                    : activeSection === section.id
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                onMouseEnter={() => setActiveSection(section.id)}
                onMouseLeave={() => setActiveSection("new-feature")}
              >
                <p className="w-full pt-6 pb-2 text-3xl font-bold leading-10 text-left text-white font-aeonik">
                  {section.title}
                </p>
                <p
                  className={`pb-6 text-white text-lg transition-opacity duration-300 ${
                    activeSection === "new-feature"
                      ? "opacity-100"
                      : activeSection === section.id
                      ? "opacity-100"
                      : "group-hover:opacity-30"
                  }`}
                >
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-6/12 h-[624px]">
          {sections.map((section: SectionType) => (
            <div
              key={section.id}
              className={`absolute z-10 w-[624px] h-[624px] right-0 top-[38px] transition-opacity duration-300 ${
                activeSection === section.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={section.image}
                alt={section.title}
                width={624}
                height={624}
                className="w-[624px] h-[624px] object-contain translate-x-[6px] translate-y-[-1px]"
                priority={section.id === "new-feature"}
                onError={() =>
                  console.error(`Failed to load image for ${section.title}`)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesktopEnterpriseAi;
