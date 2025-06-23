"use client";
import { FC, JSX, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MobileHeroTab = dynamic(() => import("./MobileHeroTab"), { ssr: false });
const DesktopHeroTab = dynamic(() => import("./DesktopHeroTab"), {
  ssr: false,
});

const HeroTab: FC = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <MobileHeroTab /> : <DesktopHeroTab />;
};

export default HeroTab;
