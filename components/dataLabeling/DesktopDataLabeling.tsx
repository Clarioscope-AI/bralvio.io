import React, { useState } from "react";
import Button from "../ui/button/Button";
import { LabelingCategory } from "@/types/dataLabelingTypes";
import { labelingImages } from "@/data/dataLabeling";

const DesktopDataLabeling = () => {
  const [activeTab, setActiveTab] = useState<LabelingCategory>("3D");
  
  const handleTabClick = (tab: LabelingCategory) => {
    setActiveTab(tab);
  };
  
  // Map for display labels (medical focus)
  const tabDisplayLabels: Record<string, string> = {
    "3D": "Imaging",
    "Image": "Diagnostic",
    "Mapping": "Anatomical",
    "Text": "Clinical",
    "Audio": "Biometric"
  };
  
  return (
    <div className="flex justify-between p-10 w-11/12 mx-auto text-white bg-[linear-gradient(180deg,_rgba(243,_238,_255,_0)_0%,_rgba(243,_238,_255,_0.04)_100%)]">
      <div className="flex-1 pr-5">
        <h1 className="text-4xl mb-2">Data Labeling</h1>
        <p className="text-gray-400 text-lg mb-5">
          The best quality data to fuel the best performing models
        </p>
        <div className="mb-5 lg:border lg:border-white/55 rounded-full max-w-[500px] flex p-2 justify-between">
          {Object.keys(labelingImages).map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 rounded-full text-white text-sm ${
                activeTab === tab
                  ? "bg-gray-600 shadow-inner"
                  : "bg-gray-700 hover:bg-gray-600"
              } transition-colors duration-200`}
              style={{
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: activeTab === tab ? "#333" : "#222",
              }}
              onClick={() => handleTabClick(tab as LabelingCategory)}
            >
              {tabDisplayLabels[tab] || tab}
            </button>
          ))}
        </div>
        <p className="text-gray-300 text-base leading-6 mb-5">
          Bralvio has pioneered in the data labeling industry by combining
          AI-based techniques with human-in-the-loop, delivering labeled data at
          unprecedented quality, scalability, and efficiency.
        </p>
        <Button
          label="Label my data"
          arrow
          classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-4 py-2 hover:bg-[#5B3557] transition-colors duration-300 mt-5"
        />
      </div>
      <div className="flex-1 relative">
        <img
          src={labelingImages[activeTab]}
          alt={`${activeTab} labeled objects`}
          className="w-full h-[350px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default DesktopDataLabeling;