import React from "react";
import Marquee from "react-fast-marquee";
import timeLogo from "@/assets/hero_tab_img/time.png";
import howardLogo from "@/assets/hero_tab_img/howard-hughes.png";
import dlapiperLogo from "@/assets/hero_tab_img/dlapiper.png";
import ciscoLogo from "@/assets/hero_tab_img/cisco.png";
import cengageLogo from "@/assets/hero_tab_img/cengage.png";
import Image from "next/image";

const MobileHeroTab = () => {
  return (
    <div className="border-2 border-gray-200 text-secondary p-2">
      <Marquee>
        <div className="flex space-x-5 md:space-x-10">
          {[
            timeLogo,
            howardLogo,
            dlapiperLogo,
            ciscoLogo,
            cengageLogo,
            timeLogo,
          ].map((image, index) => (
            <Image
              className=" w-16 h-16 md:w-20 md:h-20 object-contain"
              key={index}
              src={image}
              alt="Time Logo"
              width={70}
              height={70}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MobileHeroTab;
