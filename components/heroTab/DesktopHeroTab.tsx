"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import timeLogo from "@/assets/hero_tab_img/time.png";
import howardLogo from "@/assets/hero_tab_img/howard-hughes.png";
import dlapiperLogo from "@/assets/hero_tab_img/dlapiper.png";
import ciscoLogo from "@/assets/hero_tab_img/cisco.png";
import cengageLogo from "@/assets/hero_tab_img/cengage.png";

const DesktopHeroTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-secondary text-center p-4">
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex flex-wrap justify-center gap-2">
          <span className="flex items-end">Bralvio works with</span>

          {[
            "Generative AI Companies,",
            "U.S. Government Agencies &",
            "Enterprises",
          ].map((label, index) => (
            <Tab
              key={index}
              className="flex flex-col items-center focus:outline-none focus:ring-0"
            >
              {({ selected }) => (
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
          {/* tab-1 */}
          <TabPanel>
            <div className="flex justify-around items-center gap-6 border-2 border-amber-400">
              {[timeLogo, howardLogo, dlapiperLogo, ciscoLogo, cengageLogo].map(
                (image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Time Logo"
                    width={100}
                    height={100}
                  />
                )
              )}
            </div>
          </TabPanel>
          {/* tab-2 */}
          <TabPanel>
            <div className="flex justify-around items-center gap-6 border-2 border-red-400">
              {[timeLogo, howardLogo, dlapiperLogo, ciscoLogo, cengageLogo].map(
                (image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Time Logo"
                    width={100}
                    height={100}
                  />
                )
              )}
            </div>
          </TabPanel>
          {/* tab-3 */}
          <TabPanel>
            <div className="flex justify-around items-center gap-6 border-2 border-blue-400">
              {[timeLogo, howardLogo, dlapiperLogo, ciscoLogo, cengageLogo].map(
                (image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Time Logo"
                    width={100}
                    height={100}
                  />
                )
              )}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default DesktopHeroTab;
