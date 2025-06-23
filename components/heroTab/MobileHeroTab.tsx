import React from "react";
import Marquee from "react-fast-marquee";
import timeLogo from "@/assets/hero_tab_img/time.webp";
import howardLogo from "@/assets/hero_tab_img/howard-hughes.webp";
import dlapiperLogo from "@/assets/hero_tab_img/dlapiper.webp";
import ciscoLogo from "@/assets/hero_tab_img/cisco.webp";
import cengageLogo from "@/assets/hero_tab_img/cengage.webp";
import Image from "next/image";

const MobileHeroTab = () => {
  return (
    <div className="text-secondary p-2 w-full">
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
          {/* make xtra space for fixing space */}
          <span className="w-1 md:hidden"></span>
        </div>
      </Marquee>
    </div>
  );
};

export default MobileHeroTab;
