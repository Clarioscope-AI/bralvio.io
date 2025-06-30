import React, { useState } from 'react';
import Button from '../ui/button/Button';

const MobileDataLabeling = () => {
  const [activeTab, setActiveTab] = useState('3D');

  const images = {
    "3D": "https://i.ibb.co/w1c8zNH/calligraphy-7188024-1280.jpg",
    Image: "https://i.ibb.co/T41ndVR/logosd.webp",
    Mapping: "https://i.ibb.co/hDDmvGh/books-5504893-1280.jpg",
    Text: "https://i.ibb.co/61phbXv/meshign.jpg",
    Audio: "https://i.ibb.co/4p3sVvB/math.jpg",
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col p-5 bg-[linear-gradient(180deg,_rgba(243,_238,_255,_0)_0%,_rgba(243,_238,_255,_0.04)_100%)] text-white w-11/12 mx-auto rounded-md">
      <h1 className="text-3xl mb-3 font-semibold text-center">Data Labeling</h1>
      <p className="text-gray-300 text-base mb-4 text-center">
        The best quality data to fuel the best performing models
      </p>

      <div className="overflow-x-auto mb-4 ">
        <div className="flex space-x-2 w-max text-center justify-center mx-auto">
          {["3D", "Image", "Mapping", "Text", "Audio"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded text-sm ${
                activeTab === tab ? "bg-gray-600" : "bg-gray-700"
              } hover:bg-gray-600 transition-colors duration-200`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <img
        src={images[activeTab]}
        alt={`${activeTab} labeled objects`}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />

      <p className="text-gray-300 text-sm mb-8 leading-relaxed">
        Scale has pioneered in the data labeling industry by combining AI-based
        techniques with human-in-the-loop, delivering labeled data at
        unprecedented quality, scalability, and efficiency.
      </p>

      <Button
        label="Label my data"
        arrow
        classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-4 py-2 hover:bg-[#5B3557] transition-colors duration-300"
      />
    </div>
  );
};

export default MobileDataLabeling;
