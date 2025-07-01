"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MobileDataLabeling = dynamic(() => import("./MobileDataLabeling"), {
  ssr: false,
});
const DesktopDataLabeling = dynamic(() => import("./DesktopDataLabeling"), {
  ssr: false,
});

const DataLabeling = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <MobileDataLabeling /> : <DesktopDataLabeling />;
};

export default DataLabeling;
