"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MobileHeroTab = dynamic(() => import("./MobileHeroTab"), { ssr: false });
const DesktopHeroTab = dynamic(() => import("./DesktopHeroTab"), {
  ssr: false,
});

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

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

export default Header;
