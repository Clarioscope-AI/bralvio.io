"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FC, JSX, useEffect, useState } from "react";
import { FaHospital } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import timeLogo from "@/assets/hero_tab_img/time.webp";
import howardLogo from "@/assets/hero_tab_img/howard-hughes.webp";
import dlapiperLogo from "@/assets/hero_tab_img/dlapiper.webp";
import ciscoLogo from "@/assets/hero_tab_img/cisco.webp";
import cengageLogo from "@/assets/hero_tab_img/cengage.webp";

const DesktopHeroTab: FC = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  // Keep the existing images
  const images: StaticImageData[] = [
    timeLogo,
    howardLogo,
    dlapiperLogo,
    ciscoLogo,
    cengageLogo,
    timeLogo,
  ];
  
  // Update tab labels to medical focus
  const labels: string[] = [
    "Healthcare Institutions,",
    "Medical Device Companies &",
    "Research Partners",
  ];
  
  return (
    <div className="text-secondary text-center px-4">
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex flex-wrap justify-center gap-2">
          <span className="flex items-end">Bralvio works with</span>
          {labels?.map((label, index) => (
            <Tab
              key={index}
              className="flex flex-col items-center focus:outline-none focus:ring-0"
            >
              {({ selected }: { selected: boolean }) => (
                <>
                  <span
                    className={clsx(
                      "bg-transparent text-inherit outline-none",
                      selected && ""
                    )}
                  >
                    {label}
                  </span>
                  {selected && (
                    <div
                      key={index + "-progress"}
                      className="h-[2px] w-full bg-gray-200 animate-tab-progress"
                    />
                  )}
                </>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-4 p-6">
          {/* tab-1: Healthcare Institutions */}
          <TabPanel>
            <div className="flex justify-around items-center gap-6">
              <ul>
                <li>
                  <p className="text-3xl font-bold flex items-center gap-2">
                    <span>
                      <FaHospital />
                    </span>
                    Mayo Clinic
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="text-3xl font-bold flex items-center gap-2">
                    <span>
                      <FaStethoscope />
                    </span>
                    Cleveland Clinic
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="text-3xl font-bold">Johns Hopkins</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="text-3xl font-bold">Mount Sinai</p>
                </li>
              </ul>
              {[ciscoLogo, cengageLogo].map(
                (image: StaticImageData, index: number) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Healthcare Institution Logo"
                    width={100}
                    height={100}
                  />
                )
              )}
            </div>
          </TabPanel>
          
          {/* tab-2: Medical Device Companies */}
          <TabPanel>
            <div className="flex justify-around items-center gap-6">
              {images?.map((image: StaticImageData, index: number) => (
                <Image
                  key={index}
                  src={image}
                  alt="Medical Device Company Logo"
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </TabPanel>
          
          {/* tab-3: Research Partners */}
          <TabPanel>
            <div className="flex justify-around items-center gap-6">
              {images?.map((image: StaticImageData, index: number) => (
                <Image
                  key={index}
                  src={image}
                  alt="Research Partner Logo"
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default DesktopHeroTab;