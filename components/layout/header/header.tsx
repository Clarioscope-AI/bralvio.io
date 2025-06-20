"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MobileHeader = dynamic(() => import("./MobileHeader"), { ssr: false });
const DesktopHeader = dynamic(() => import("./DesktopHeader"), { ssr: false });

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
